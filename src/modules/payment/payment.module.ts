import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { MongodbModule } from '../database/mongodb/mongodb.module';
import { paymentProvider } from './payment.providers';

@Module({
  imports: [MongodbModule],
  controllers: [PaymentController],
  providers: [...paymentProvider, PaymentService]
})
export class PaymentModule {}
