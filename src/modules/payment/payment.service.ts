import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
    constructor(
        @Inject('PAYMENT_MODEL')
        private paymentModel: Model<CreatePaymentDto>
    ) {}

    async getPayments() {
        return await this.paymentModel.find();
    }

    async getPayment(id: String) {
        return await this.paymentModel.findById(id).exec();
    }

    async createSinglePayment(payload: any) {
        return await this.paymentModel.create(payload);
    }
}
