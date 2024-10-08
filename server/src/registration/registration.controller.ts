import { Body, Controller, Post } from '@nestjs/common'
import { RegistrationService } from './registration.service'
import { UserDto } from 'src/dto/user.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Регистрация')
@Controller('registration')
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) {}

    @Post()
    async registration(@Body() dto: UserDto) {
        return await this.registrationService.registration(dto)
    }
}
