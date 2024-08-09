import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class LoginFailDto {
    @ApiProperty({default: ['Incorrect Username or Password']})
    message: string[];

    @ApiProperty({default: 'Unauthorized'})
    error: string;

    @ApiProperty({default: HttpStatus.UNAUTHORIZED})
    statusCode: number;
}