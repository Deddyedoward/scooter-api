import { Injectable } from '@nestjs/common';
import { SignIn } from './auth.interface';

@Injectable()
export class AuthService {
    verify(signIn: SignIn) {
        return signIn;
    }
}
