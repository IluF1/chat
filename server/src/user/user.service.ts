import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    getUserByLogin(login: string) {
        const find = this.prisma.user.findUnique({
            where: {
                login: login
            }
        })

        if (!find) {
            throw new NotFoundException('Пользователь не найден')
        }

        return find
    }

    getUserById(id: number) {
        const find = this.prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!find) {
            throw new NotFoundException('Пользователь не найден')
        }

        return find
    }
}
