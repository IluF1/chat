import { Module } from '@nestjs/common'
import { RegistrationModule } from './registration/registration.module'
import { PrismaModule } from './prisma.module'
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [RegistrationModule, PrismaModule, AuthModule]
})
export class AppModule {}
