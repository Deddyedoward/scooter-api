import { Controller, Get, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}
    
    @Get()
    async index() {
        return await this.userService.findAll()
    }
}