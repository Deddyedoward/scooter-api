import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AuthUtilService } from "src/modules/auth/auth-util.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authUtilService: AuthUtilService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        let token = req.headers.authorization;

        if(!token) {
            throw new UnauthorizedException('No token provided');
        }
        
        try {
            token = this.extractTokenFromHeader(req);
            await this.authUtilService.validateJwt(token);
        } catch {
            throw new UnauthorizedException('Invalid token');
        }

        next();
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}