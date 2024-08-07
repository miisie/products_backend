import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dtos/user-register.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  userRegister(@Body() userRegisterDto: UserRegisterDto) {
    return this.usersService.register(userRegisterDto);
  }
}
