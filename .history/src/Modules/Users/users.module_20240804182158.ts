import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
import { UsersController } from "./users.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
    ],
    controllers: [UsersController]
})

export class UsersModule {}