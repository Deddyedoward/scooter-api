import { IsNumber, IsString } from "class-validator"

export class CreatePaymentDto {
    @IsString()
    rideId: String

    @IsString()
    paymentType: String
    
    @IsString()
    paymentDate: Date

    @IsNumber()
    amount: Number

    @IsString()
    status: String
}