import { Module } from "@nestjs/common";
import { userProviders } from "./user.providers";
import { MongodbModule } from "../database/mongodb/mongodb.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { IsUserExistsConstraint } from "./validation/is-user-exists.constraint";

@Module({
    imports: [MongodbModule],
    controllers: [UserController],
    providers: [...userProviders, UserService, IsUserExistsConstraint],
    exports: [...userProviders, UserService]
})
export class UserModule {}