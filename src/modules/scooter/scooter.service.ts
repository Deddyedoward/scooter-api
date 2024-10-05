import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateScooterDto } from './dto/create-scooter.dto';

@Injectable()
export class ScooterService {
    constructor(
        @Inject('SCOOTER_MODEL')
        private scooterModel: Model<CreateScooterDto>
    ) {}

    async findScooters() {
        return await this.scooterModel.find({ status: 'active' });
    }

    async findScooter() {
        return await this.scooterModel.findOne();
    }

    async addScooter(payload: CreateScooterDto) {
        return await this.scooterModel.create(payload);
    }
}
