import { Module } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
})
export class ProductModule{}
