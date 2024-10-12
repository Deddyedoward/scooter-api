import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AuthService } from "src/modules/auth/auth.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}

    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization;

        if(!token) {
            throw new UnauthorizedException('No token provided');
        }

        const validateToken = this.authService.validate(token);

        if (!validateToken) {
            throw new UnauthorizedException('Invalid token');
        }

        next();
    }
}