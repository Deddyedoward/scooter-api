import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { jwtConstant } from "./auth.constants";

@Injectable()
export class AuthUtilService {
    constructor(
        private jwtService: JwtService
    ) {}

    async generateToken(user: Record<string, any>) {
        const payload = { email: user.email };
        return await this.jwtService.signAsync(payload)
    }

    async validateJwt(token: any) {
        return await this.jwtService.verifyAsync(
            token,
            {
                secret: jwtConstant.secret
            }
        );
    }
}