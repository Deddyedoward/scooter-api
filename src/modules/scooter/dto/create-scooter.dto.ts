import { IsLatitude, IsLongitude, IsString  } from "class-validator"

export class CreateScooterDto {
    @IsString()
    name: string;

    @IsString()
    status: string;

    @IsString()
    batteryLevel: string;

    @IsLatitude()
    latitude: string;

    @IsLongitude()
    longitude: string;
}