import { IsString } from "class-validator"

export class GetRideDto {
    @IsString()
    id: String
}