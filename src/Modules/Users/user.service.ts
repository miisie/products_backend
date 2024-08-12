import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dtos/user-register.dto';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { SuccessResponseDto } from '../../Commons/Responses/Swagger-response-dtos/Common/success-response.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(userRegisterDto: UserRegisterDto) {
    let user: UserEntity;
    if(userRegisterDto.email) {
      user = await this.userRepository.getUserByNameOrEmail(
        userRegisterDto.username,
        userRegisterDto.email,
      );
    }
    user = await this.userRepository.getUserByNameOrEmail(
      userRegisterDto.username,
    );
    if (user) {
      throw new BadRequestException(['Username or Email already exists']);
    }
    const newUser = this.userRepository.create(userRegisterDto);
    await this.userRepository.save(newUser);
    return new SuccessResponseDto({}, ['Create User Success'], HttpStatus.CREATED);
  }

  async getUserByNameOrEmail(username: string, email?: string): Promise<UserEntity> {
    if (email){
      return await this.userRepository.getUserByNameOrEmail(username,email);
    }
    return await this.userRepository.getUserByNameOrEmail(username);
  }

  async getUserInfo(userId: string) {
    const user = await this.userRepository.getUserById(userId);
    const { id, createdAt, ...info } = user;
    return info;
  }
}
