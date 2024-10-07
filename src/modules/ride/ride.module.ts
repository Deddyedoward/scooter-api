import { Module } from '@nestjs/common';
import { MongodbModule } from '../database/mongodb/mongodb.module';
import { rideProviders } from './ride.providers';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';

@Module({
    imports: [MongodbModule],
    providers: [...rideProviders, RideService],
    controllers: [RideController],
    exports: [...rideProviders, RideService]
})
export class RideModule {}
