import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: TypeOrmModule.forFeature([UsersE])
})

export class UsersModule {

}