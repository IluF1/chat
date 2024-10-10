import { HttpException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserDto } from 'src/dto/user.dto'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import * as bcrypt from 'bcrypt'
import { Response } from 'express'
import { CookiesService } from 'src/cookies/cookies.service'

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
        private prisma: PrismaService,
        private cookie: CookiesService
    ) {}

    async auth(dto: UserDto, response: Response) {
        if (!dto.login || !dto.password) {
            throw new HttpException('Логин и пароль обязательны', 400)
        }

        const find = await this.userService.getUserByLogin(dto.login)
        if (!find) {
            throw new HttpException('Неправильный логин или пароль', 400)
        }

        const isPasswordValid = await bcrypt.compare(
            dto.password,
            find.password
        )

        if (!isPasswordValid) {
            throw new HttpException('Неправильный логин или пароль', 400)
        }

        const tokens = this.generateTokens(find)
        await this.saveRefreshToken(find.id, tokens.refreshToken)

        this.cookie.setCookie(response, 'refreshToken', tokens.refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return {
            find,
            ...tokens
        }
    }

    generateTokens(user: any) {
        const payload = { login: user.login, id: user.id, role: user.role }

        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' })
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' })

        return {
            accessToken,
            refreshToken
        }
    }

    async saveRefreshToken(userId: number, refreshToken: string) {
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                refreshToken: refreshToken
            }
        })
    }

    async refreshTokens(refreshToken: string) {
        try {
            const payload = this.jwtService.verify(refreshToken)

            const user = await this.userService.getUserById(payload.id)

            if (!user || user.refreshToken !== refreshToken) {
                throw new HttpException('Недействительный refresh токен', 403)
            }

            const tokens = this.generateTokens(user)

            await this.saveRefreshToken(user.id, tokens.refreshToken)

            return tokens
        } catch (e) {
            throw new HttpException(
                'Недействительный или просроченный refresh токен',
                403
            )
        }
    }
}
