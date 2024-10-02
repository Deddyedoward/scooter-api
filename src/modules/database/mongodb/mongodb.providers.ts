import * as mongoose from 'mongoose';

export const mongooseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/scooter'),
  },
];
