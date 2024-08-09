import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


export class RegisterSuccessDto {
    @ApiProperty({default: ['Create User Success']})
    message: string[];

    @ApiProperty({default: ''})
    error: string;

    @ApiProperty({default: HttpStatus.CREATED})
    statusCode: number;

    @ApiProperty({default: {}})
    data: object;
}