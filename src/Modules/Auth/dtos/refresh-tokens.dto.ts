import { IsNotEmpty, IsString } from "class-validator";
import { Trim } from "../../../Decorators/transform.decorators";
import { ApiProperty } from "@nestjs/swagger";

export class RefreshTokensDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Trim()
    refreshToken: string;
}