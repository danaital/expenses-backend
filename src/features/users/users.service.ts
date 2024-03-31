import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // constructor(
  //   @InjectRepository(User) private readonly usersRepository: Repository<User>,
  // ) {}

  create(createUserDto: CreateUserDto) {
    //TODO Type: Promise<User>
    const user: User = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.userName = createUserDto.userName;
    user.middleName = createUserDto.middleName;
    user.password = createUserDto.password; // TODO: Add encryption
    user.roleId = 3;
    user.registrationDate = new Date(); // TODO: Make UTC
    user.isActive = false;
    return user;
    // return this.usersRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user ${updateUserDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // getUserById(id: number) {
  //   return this.usersRepository.findOneBy({
  //     id,
  //   });
  // }

  // count() {
  //   return this.usersRepository.count();
  // }
}
