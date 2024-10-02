import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post()
    signin(@Body() signIn: SignInDto, @Res() res: Response) {
        res.json(this.authService.verify(signIn));
    }
}