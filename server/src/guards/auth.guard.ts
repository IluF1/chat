import {
    Injectable,
    CanActivate,
    ExecutionContext,
    HttpException,
    UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { Observable } from 'rxjs'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtSerivice: JwtService) {}
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const request = context.switchToHttp().getRequest()
            const token = request.headers.au
            const bearer = token.split(' ')[0]
            const payload = token.split(' ')[1]

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException('Пользователь не авторизован')
            }

            const user = this.jwtSerivice.decode(payload)

            request.user = user
            return true
        } catch (err) {
            throw new UnauthorizedException('Пользователь не авторизован')
        }
    }
}
