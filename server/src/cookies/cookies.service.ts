import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { CookieOptions } from 'express-serve-static-core'; 

@Injectable()
export class CookiesService {
    getCookies(request: Request) {
        return request.cookies;
    }

    setCookie(
        response: Response,
        name: string,
        value: string,
        options?: CookieOptions
    ): void {
        response.cookie(name, value, options);
    }

    clearCookie(response: Response, name: string): void {
        response.clearCookie(name);
    }
}
