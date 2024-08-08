import { IsNotEmpty, IsString } from "class-validator";
import { Trim } from "../../../Decorators/transform.decorators";

export class UserLoginDto {
    @IsNotEmpty()
    @IsString()
    @Trim()
    username: string;
    
    @IsNotEmpty()
    @IsString()
    @Trim()
    password: string;
}