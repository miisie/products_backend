import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsPhoneNumber,
} from 'class-validator';
import { Trim } from '../../../Decorators/transform.decorators';
export class UserRegisterDto {
  @IsNotEmpty()
  @IsString()
  @Trim()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Trim()
  readonly password: string;

  @IsOptional()
  @IsEmail()
  @Trim()
  readonly email: string;

  @IsOptional()
  @IsPhoneNumber('VN')
  readonly phoneNumber: string;

  @IsOptional()
  @IsString()
  @Trim()
  readonly address: string;
}
