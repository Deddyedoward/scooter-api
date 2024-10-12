import { IsString } from "class-validator";

export class GetPaymentDto {
    @IsString()
    id: String
}