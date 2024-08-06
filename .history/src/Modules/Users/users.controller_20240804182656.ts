import { Controller } from "@nestjs/common";

@Controller()
export class UsersController{
    constructor(
        private readonly usersService: Use
    ){}
}