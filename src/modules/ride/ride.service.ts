import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateRideDto } from './dto/create-ride.dto';

@Injectable()
export class RideService {
    constructor(
        @Inject('RIDE_MODEL')
        private rideModel: Model<CreateRideDto> 
    ) {}

    async startRide(payload: CreateRideDto) {
        return await this.rideModel.create(payload);
    }
}
