import { IsNotEmpty, IsString } from "class-validator";
import { Trim } from "../../../Decorators/transform.decorators";

export class RefreshTokensDto {
    @IsNotEmpty()
    @IsString()
    @Trim()
    refreshToken: string;
}