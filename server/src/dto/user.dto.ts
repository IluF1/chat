import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNumber, IsString, Length } from 'class-validator'

export class UserDto {
    @ApiProperty({
        description: 'Уникальный id пользователя ',
        example: 1
    })
    @IsNumber()
    id: number
    @ApiProperty({
        description: 'Имя пользователя ',
        example: 'Илья'
    })
    @IsString({ message: 'Должно быть строкой ' })
    readonly name: string
    @ApiProperty({
        description: 'Логин пользователя ',
        example: 'ilya111'
    })
    @IsString({ message: 'Должно быть строкой ' })
    readonly login: string
    @ApiProperty({
        description: 'Пароль пользователя ',
        example: '1234123412341234124123412',
        minimum: 16,
        maximum: 100
    })
    @Length(16, 100)
    @IsString({ message: 'Должно быть строкой ' })
    readonly password: string

    @ApiProperty({
        description: 'Роль пользователя',
        enum: ['Admin', 'User']
    })
    readonly role: Roles

    @ApiProperty({
        description: 'RefreshToken'
    })
    @IsString({ message: 'Должно быть строкой ' })
    readonly refreshToken: string
}

export enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}
