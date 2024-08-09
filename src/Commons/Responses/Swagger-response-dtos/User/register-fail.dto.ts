import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterFailDto {
    @ApiProperty({default: ['Username or Email already exists']})
    message: string[];

    @ApiProperty({default: 'Bad Request'})
    error: string;

    @ApiProperty({default: HttpStatus.BAD_REQUEST})
    statusCode: number;
}