import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./users.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
    ]
})

export class UsersModule {}