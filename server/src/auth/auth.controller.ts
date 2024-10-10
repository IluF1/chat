import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/dto/user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async auth(@Body() dto: UserDto, @Res() response: Response) {
        const result = await this.authService.auth(dto, response);
        return response.json(result);
    }
}
