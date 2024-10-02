import { Inject, Injectable } from '@nestjs/common';
import { SignIn } from './auth.interface';
import { Model } from 'mongoose';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<SignInDto>
    ) {}

    async verify(signIn: SignIn) {
        return await this.userModel.create(signIn);
    }
}
