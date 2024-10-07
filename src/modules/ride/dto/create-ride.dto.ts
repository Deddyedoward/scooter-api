import { IsDate, IsNumber, IsString, ValidateNested } from "class-validator"
import { Type } from "class-transformer"
import { LocationDto } from "./location.dto"

export class CreateRideDto {
    @IsString()
    scooterId: String

    @IsString()
    startTime: Date
    
    @IsString()
    endTime: Date

    @ValidateNested()
    @Type(() => LocationDto)
    startLocation: LocationDto

    @ValidateNested()
    @Type(() => LocationDto)
    endLocation: LocationDto

    @IsString()
    distance: String

    @IsNumber()
    fare: Number

    @IsString()
    status: String
}