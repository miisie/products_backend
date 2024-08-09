import { HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../Users/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants, REDIS_CLIENT } from '../../Commons/Constants/constants';
import { UserLoginDto } from './dtos/user-login.dto';
import { RedisClientType } from 'redis';
import { SuccessResponseDto } from '../../Commons/Responses/Swagger-response-dtos/Common/success-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(REDIS_CLIENT) private readonly redisClient: RedisClientType,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.getUserByNameOrEmail(username);
    if (user && user.password === password) {
      return {
        id: user.id,
        username: user.username,
        role: user.roles,
      };
    }
    return null;
  }

  async createTokens(payload: any) {
    return {
      accessToken: this.jwtService.sign(payload, { expiresIn: '5m' }),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async login(userLoginDto: UserLoginDto) {
    const user = await this.validateUser(
      userLoginDto.username,
      userLoginDto.password,
    );

    if (!user)
      throw new UnauthorizedException(['Incorrect Username or Password']);

    const payload = { username: user.username, id: user.id , role: user.role};
    const tokens = await this.createTokens(payload);
    const data = {
      username: user.username,
      id: user.id,
      role: user.role,
      ...tokens,
    }

    return new SuccessResponseDto(data, ['Login successfully'], HttpStatus.OK)
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: jwtConstants.secret,
      });

      const user = await this.userService.getUserByNameOrEmail(payload.username);
      if (!user) throw new UnauthorizedException('Invalid Token Payload');
      const { iat, exp, ...newPayload } = payload;
      const tokens = this.createTokens(newPayload);
      return new SuccessResponseDto(tokens, ['Successfully create new tokens'], HttpStatus.OK)
    } catch (e) {
      throw new UnauthorizedException('Invalid Refresh Token');
    }
  }
}
