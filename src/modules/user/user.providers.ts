import { Connection } from "mongoose";
import { UserSchema } from "./user.schema";

export const userProviders = [
    {
        provide: 'USER_MODEL',
        inject: ['MONGODB_CONNECTION'],
        useFactory: (connection: Connection) => connection.model('User', UserSchema)
    }
]