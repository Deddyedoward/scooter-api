import { IsArray } from "class-validator";

export class LocationDto {
    @IsArray()
    coordinates: Number[];

    type: String = 'Point';
}