import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { GetPaymentDto } from './dto/get-payment.dto';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @Get()
    async index() {
        return await this.paymentService.getPayments();
    }

    @Get(':id')
    async show(@Param() param: GetPaymentDto) {
        return await this.paymentService.getPayment(param.id);
    }

    @Post()
    async create(@Body() payload: CreatePaymentDto) {
        return await this.paymentService.createSinglePayment(payload)
    }
}
