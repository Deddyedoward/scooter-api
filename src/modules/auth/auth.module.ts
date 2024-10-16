import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './auth.constants';
import { AuthUtilService } from './auth-util.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '600s'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthUtilService],
  exports: [AuthService, AuthUtilService],
})
export class AuthModule {}
