import { Connection } from "mongoose";
import { RideSchema } from "./schema/ride.schema";

export const rideProviders = [
    {
        provide: 'RIDE_MODEL',
        inject: ['MONGODB_CONNECTION'],
        useFactory: (connection: Connection) => connection.model('Ride', RideSchema)
    }
]