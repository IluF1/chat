import { Module } from '@nestjs/common'
import { RegistrationService } from './registration.service'
import { RegistrationController } from './registration.controller'
import { PrismaModule } from 'src/prisma.module'

@Module({
    controllers: [RegistrationController],
    providers: [RegistrationService],
    imports: [PrismaModule]
})
export class RegistrationModule {}
