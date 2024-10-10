import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaModule } from 'src/prisma.module'
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from 'src/user/user.module'
import { CookiesModule } from 'src/cookies/cookies.module'

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        PrismaModule,
        JwtModule.register({
            secret: process.env.SECRET || 'secret',
            signOptions: { expiresIn: '24h' }
        }),
        UserModule,
        CookiesModule
    ]
})
export class AuthModule {}
