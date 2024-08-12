import { Body, Controller, Get, Post, UseGuards, Request, HttpStatus, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dtos/user-register.dto';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';
import { Roles } from '../../Decorators/role.decorators';
import { UserRole } from '../../Commons/Enum/Enums';
import { Public } from '../../Decorators/authen.decorators';
import { ApiBearerAuth, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterSuccessDto } from '../../Commons/Responses/Swagger-response-dtos/User/register-success.dto';
import { RegisterFailDto } from '../../Commons/Responses/Swagger-response-dtos/User/register-fail.dto';
import { InvalidInputDto } from '../../Commons/Responses/Swagger-response-dtos/Common/invalid-input.dto';
import { Response } from 'express';


@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Public()
  @ApiResponse({status: HttpStatus.BAD_REQUEST, type: RegisterFailDto})
  @ApiResponse({status: HttpStatus.UNPROCESSABLE_ENTITY, type: InvalidInputDto})
  @ApiResponse({status: HttpStatus.CREATED, type: RegisterSuccessDto})
  @Post('register')
  async userRegister(@Res() res: Response, @Body() userRegisterDto: UserRegisterDto) {
    const data = await this.usersService.register(userRegisterDto);
    return res.status(HttpStatus.CREATED).json(data);
  }
  
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN, UserRole.USER)
  @ApiBearerAuth()
  @Get('info')
  async getUserInfo(@Res() res: Response, @Request() req) {
    const {id, username} = req.user;
    const data = await this.usersService.getUserInfo(id);
    return res.status(HttpStatus.OK).json(data);
  }


}
