import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { GetUserDto } from "./dto/get-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<GetUserDto>
    ) {}

    async findAll() {
        return await this.userModel.find();
    }

    async findOne() {
        return await this.userModel.findOne().exec();
    }

    async userRegistration(payload: CreateUserDto) {
        return await this.userModel.create(payload);
    }

    async findExistUserByEmail(email: String) {
        return await this.userModel.findOne({ email: email}).exec();
    }
}