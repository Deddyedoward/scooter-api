import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { RideService } from './ride.service';
import { GetRideDto } from './dto/get-ride.dto';
import { CompleteRideDto } from './dto/complete-ride.dto';

@Controller('ride')
export class RideController {
    constructor(
        private rideService: RideService
    ) {}

    @Get()
    async index() {
        return await this.rideService.getRides();
    }

    @Get(':id')
    async show(@Param() params: GetRideDto) {
        return await this.rideService.getRideById(params)
    }

    @Post()
    async create(@Body() payload: CreateRideDto) {
        return await this.rideService.startRide(payload);
    }

    @Post(':id/complete')
    async complete(@Param() qs: any, @Body() payload: CompleteRideDto) {
        return await this.rideService.completeRide(qs.id, payload);
    }
}
