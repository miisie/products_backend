import { Body, Controller, Get, Post, Query, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dtos/user-register.dto';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  async userRegister(@Body() userRegisterDto: UserRegisterDto) {
    return await this.usersService.register(userRegisterDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('info')
  async getUserInfo(@Request() req) {
    const {id, username} = req.user;
    return await this.usersService.getUserInfo(id);
  }
}
