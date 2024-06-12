import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.userName = createUserDto.userName;
    user.middleName = createUserDto.middleName;
    user.roleId = 3;
    user.password = createUserDto.password; // TODO: Add encryption
    user.registrationDate = new Date();
    user.isActive = true;
    user.metadata = {};
    return this.usersRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user ${updateUserDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({
      id,
    });
  }

  findOneByUsername(username: string) {
    return this.usersRepository.findOneBy({
      userName: username,
    });
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({
      email,
    });
  }

  count() {
    return this.usersRepository.count();
  }
}
