import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
// import { User } from '../users/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

// import * as bcrypt from 'bcrypt';
// TODO: add salt rounds to config
// TODO: add jwt
// TODO: add i18n translation for error messages, success messages, and other messages and labels
@Injectable()
export class RegisterService {
  constructor(private readonly usersService: UsersService) {}

  async create(createUserDto: any): Promise<CreateUserDto> {
    const user = {
      userName: createUserDto.username,
      password: createUserDto.password,
      email: createUserDto.email,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      middleName: createUserDto.middleName,
    };
    await this.usersService.create(user);
    return createUserDto;
  }
}
