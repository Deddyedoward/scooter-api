import { Module } from "@nestjs/common";
import { userProviders } from "./user.providers";
import { MongodbModule } from "../database/mongodb/mongodb.module";

@Module({
    imports: [MongodbModule],
    providers: [...userProviders],
    exports: [...userProviders]
})
export class UserModule {}