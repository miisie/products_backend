import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsPhoneNumber,
} from 'class-validator';
import { Trim } from '../../../Decorators/transform.decorators';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class UserRegisterDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Trim()
  readonly username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Trim()
  password: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  @Trim()
  readonly email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber('VN')
  readonly phoneNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  readonly address: string;
}
