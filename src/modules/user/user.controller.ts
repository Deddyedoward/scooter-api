import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}
    
    @Get()
    async index() {
        return await this.userService.findAll()
    }

    @Post()
    async create(@Body() payload: CreateUserDto) {
        return await this.userService.userRegistration(payload);
    }

    // @Post(':id/verify')
    // async verify(@Body() payload: any) {
    //     return await this.userService.findAll();
    // }

    @Get(':id')
    async show() {
        return await this.userService.findOne()
    }
}