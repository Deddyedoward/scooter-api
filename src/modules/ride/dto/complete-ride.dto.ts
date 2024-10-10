import { ValidateNested } from "class-validator"
import { Type } from "class-transformer"
import { LocationDto } from "./location.dto"

export class CompleteRideDto {
    @ValidateNested()
    @Type(() => LocationDto)
    endLocation: LocationDto
}