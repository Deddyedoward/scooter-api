import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { GetUserDto } from "./dto/get-user.dto";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<GetUserDto>
    ) {}

    async findAll() {
        return await this.userModel.find();
    }
}