import { Module } from '@nestjs/common'
import { RegistrationModule } from './registration/registration.module'
import { PrismaModule } from './prisma.module'
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CookiesModule } from './cookies/cookies.module';

@Module({
    imports: [RegistrationModule, PrismaModule, AuthModule, UserModule, CookiesModule]
})
export class AppModule {}
