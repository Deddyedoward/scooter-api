import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { GetUserDto } from "./dto/get-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthUtilService } from "../auth/auth-util.service";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<GetUserDto>,
        private authUtilService: AuthUtilService
    ) {}

    async findAll() {
        return await this.userModel.find();
    }

    async findOne() {
        return await this.userModel.findOne().exec();
    }

    async userRegistration(payload: CreateUserDto) {
        payload.password = await this.authUtilService.generateToken({ email: payload.email })
        return await this.userModel.create(payload);
    }

    async findExistUserByEmail(email: String) {
        return await this.userModel.findOne({ email: email}).exec();
    }
}