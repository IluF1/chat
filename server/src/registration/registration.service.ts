import { HttpException, Injectable } from '@nestjs/common'
import { UserDto } from 'src/dto/user.dto'
import { PrismaService } from 'src/prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class RegistrationService {
    constructor(private prisma: PrismaService) {}

    async registration(dto: UserDto) {
        const find = await this.prisma.user.findUnique({
            where: {
                login: dto.login
            }
        })

        if (find) {
            throw new HttpException(
                'Пользователь с таким логином уже существует',
                400
            )
        }

        const password = await bcrypt.hash(dto.password, 12)

        return await this.prisma.user.create({
            data: {
                login: dto.login,
                name: dto.name,
                password: password
            }
        })
    }
}
