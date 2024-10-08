import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateRideDto } from './dto/create-ride.dto';
import { GetRideDto } from './dto/get-ride.dto';

@Injectable()
export class RideService {
    constructor(
        @Inject('RIDE_MODEL')
        private rideModel: Model<CreateRideDto> 
    ) {}

    async startRide(payload: CreateRideDto) {
        return await this.rideModel.create(payload);
    }

    async getRideById(params: GetRideDto) {
        return await this.rideModel.findById(params.id).exec()
    }
}
