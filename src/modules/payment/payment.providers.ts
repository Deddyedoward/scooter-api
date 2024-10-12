import { Connection } from "mongoose";
import { PaymentSchema } from "./schema/payment.schema";

export const paymentProvider = [
    {
        provide: 'PAYMENT_MODEL',
        inject: ['MONGODB_CONNECTION'],
        useFactory: (connection: Connection) => connection.model('Payment', PaymentSchema)
    }
]