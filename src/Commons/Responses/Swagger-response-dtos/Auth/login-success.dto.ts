import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


export class LoginSuccessDto {
    @ApiProperty({default: ['Login successfully']})
    message: string[];

    @ApiProperty({default: ''})
    error: string;

    @ApiProperty({default: HttpStatus.OK})
    statusCode: number;

    @ApiProperty({default: {}})
    data: object;
}