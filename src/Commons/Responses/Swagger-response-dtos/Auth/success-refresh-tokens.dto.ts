import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


export class SuccessRefreshTokensDto {
    @ApiProperty({default: ['Successfully create new tokens']})
    message: string[];

    @ApiProperty({default: ''})
    error: string;

    @ApiProperty({default: HttpStatus.OK})
    statusCode: number;

    @ApiProperty({default: {}})
    data: object;
}