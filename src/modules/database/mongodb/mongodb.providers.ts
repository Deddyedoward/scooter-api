import * as mongoose from 'mongoose';

export const mongooseProviders = [
    {
        provide: 'MONGODB_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://localhost/nest')
    }
]