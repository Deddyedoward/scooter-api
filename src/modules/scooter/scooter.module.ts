import { Module } from "@nestjs/common";
import { MongodbModule } from "../database/mongodb/mongodb.module";
import { ScooterController } from "./scooter.controller";
import { scooterProviders } from "./scooter.providers";
import { ScooterService } from "./scooter.service";

@Module({
    imports: [MongodbModule],
    controllers: [ScooterController],
    providers: [...scooterProviders, ScooterService],
    exports: [...scooterProviders, ScooterService]
})
export class ScooterModule {}