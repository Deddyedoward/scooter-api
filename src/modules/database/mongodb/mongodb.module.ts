import { Module } from '@nestjs/common';
import { mongooseProviders } from './mongodb.providers';

@Module({
  providers: [...mongooseProviders],
  exports: [...mongooseProviders],
})
export class MongodbModule {}
