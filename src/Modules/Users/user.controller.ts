import { Body, Controller, Get, Post, Query, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dtos/user-register.dto';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';
import { Roles } from '../../Decorators/role.decorators';
import { UserRole } from '../../Commons/Enum/Enums';
import { Public } from '../../Decorators/authen.decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Public()
  @Post('register')
  async userRegister(@Body() userRegisterDto: UserRegisterDto) {
    return await this.usersService.register(userRegisterDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN, UserRole.USER)
  @ApiBearerAuth()
  @Get('info')
  async getUserInfo(@Request() req) {
    const {id, username} = req.user;
    return await this.usersService.getUserInfo(id);
  }
}
