import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity) private readonly) {

    }
}