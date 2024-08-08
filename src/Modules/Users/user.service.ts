import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dtos/user-register.dto';
import { UserRepository } from './user.repository';
import { ResponseFormat } from '../../Commons/Responses/Response';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

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
}
