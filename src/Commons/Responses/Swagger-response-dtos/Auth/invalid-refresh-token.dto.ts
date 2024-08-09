import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class InvalidRefreshDto {
    @ApiProperty({default: ['Invalid Refresh Token']})
    message: string[];

    @ApiProperty({default: 'Unauthorized'})
    error: string;

    @ApiProperty({default: HttpStatus.UNAUTHORIZED})
    statusCode: number;
}