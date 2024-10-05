import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScooterService } from './scooter.service';
import { CreateScooterDto } from './dto/create-scooter.dto';

@Controller('scooter')
export class ScooterController {
    constructor(
        private scooterService: ScooterService
    ) {}

    @Get()
    async index() {
       return await this.scooterService.findScooters();
    }

    @Post()
    async create(@Body() payload: CreateScooterDto) {
        return await this.scooterService.addScooter(payload);
    }
    
    @Get(':id')
    async show() {
        return await this.scooterService.findScooter();
    }

}
