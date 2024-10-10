import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateRideDto } from './dto/create-ride.dto';
import { GetRideDto } from './dto/get-ride.dto';
import { CompleteRideDto } from './dto/complete-ride.dto';

@Injectable()
export class RideService {
    constructor(
        @Inject('RIDE_MODEL')
        private rideModel: Model<CreateRideDto> 
    ) {}

    async startRide(payload: CreateRideDto) {
        return await this.rideModel.create(payload);
    }

    async getRides() {
        return await this.rideModel.find();
    }

    async getRideById(params: GetRideDto) {
        return await this.rideModel.findById(params.id).exec()
    }

    async completeRide(id: String, payload: CompleteRideDto) {
        console.log(id);
        return await this.rideModel.updateOne({ _id: id }, { $set: { endLocation: payload.endLocation, status: 'COMPLETED' }})
    }
}
