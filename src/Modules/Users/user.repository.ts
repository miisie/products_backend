import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { DataSource, Equal, Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(private dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async getUserByName(username: string) {
        return await this.findOne( {
            where: {
                username: username,
            }
        })
    }
}