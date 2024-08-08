import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dtos/user-register.dto';
import { UserRepository } from './user.repository';
import { ResponseFormat } from '../../Commons/Responses/Response';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async register(userRegisterDto: UserRegisterDto) {
    const user = await this.userRepository.getUserByName(
      userRegisterDto.username,
    );
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const newUser = this.userRepository.create(userRegisterDto);
    await this.userRepository.save(newUser);
    return ResponseFormat(201, ['Create User Success']);
  }

  async getUserByName(username: string): Promise<UserEntity> {
    return await this.userRepository.getUserByName(username);
  }

  async getUserInfo(userId: string) {
    const user = await this.userRepository.getUserById(userId);
    const {id, createdAt, ...info} = user;
    return info;
  }
}
