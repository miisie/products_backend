import { IsNotEmpty, IsString } from "class-validator";
import { Trim } from "../../../Decorators/transform.decorators";
import { ApiProperty } from "@nestjs/swagger";

export class UserLoginDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Trim()
    username: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Trim()
    password: string;
}