import { Module } from "@nestjs/common";
import { userProviders } from "./user.providers";
import { MongodbModule } from "../database/mongodb/mongodb.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [MongodbModule],
    controllers: [UserController],
    providers: [...userProviders, UserService],
    exports: [...userProviders]
})
export class UserModule {}