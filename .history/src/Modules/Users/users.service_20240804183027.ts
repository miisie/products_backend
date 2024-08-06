import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
import { Repository } from "typeorm";
import { UserRegisterDto } from "./dtos/user-register.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>
    ){
        createUser(UserRegisterDto: UserRegisterDto)
    }
}