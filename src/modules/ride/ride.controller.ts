import { Body, Controller, Post } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { RideService } from './ride.service';

@Controller('ride')
export class RideController {
    constructor(
        private rideService: RideService
    ) {}

    async index() {}

    async show() {}

    @Post()
    async create(@Body() payload: CreateRideDto) {
        return await this.rideService.startRide(payload);
    }
}
