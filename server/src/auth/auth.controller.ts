import { Body, Controller, Post, Headers, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserDto } from 'src/dto/user.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async auth(
        @Body() dto: UserDto,
        @Res() response
    ) {
        return await this.authService.auth(dto, response)
    }
}
