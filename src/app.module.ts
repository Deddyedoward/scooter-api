import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MongodbModule } from './modules/database/mongodb/mongodb.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongodbModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
