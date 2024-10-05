import { Connection } from "mongoose";
import { ScooterSchema } from "./schema/scooter.schema";

export const scooterProviders = [
    {
        provide: 'SCOOTER_MODEL',
        inject: ['MONGODB_CONNECTION'],
        useFactory: (connection: Connection) => connection.model('Scooter', ScooterSchema)
    }
]