import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MongodbModule } from './modules/database/mongodb/mongodb.module';
import { ScooterModule } from './modules/scooter/scooter.module';
import { RideModule } from './modules/ride/ride.module';
import { PaymentModule } from './modules/payment/payment.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [
    MongodbModule, 
    AuthModule, 
    UserModule, 
    RideModule,
    ScooterModule,
    PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*')
  }
}
