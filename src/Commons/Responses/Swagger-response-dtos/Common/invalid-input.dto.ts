import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class InvalidInputDto {
    @ApiProperty({default: ['Invalid Input']})
    message: string[];

    @ApiProperty({default: 'Unprocessable Entity'})
    error: string;

    @ApiProperty({default: HttpStatus.UNPROCESSABLE_ENTITY})
    statusCode: number;
}