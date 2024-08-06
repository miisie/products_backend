import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: TypeOrmModule.forFeature([UsersEn])
})

export class UsersModule {

}