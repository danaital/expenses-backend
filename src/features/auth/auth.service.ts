import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
// TODO: add salt rounds to config
// TODO: add jwt
// TODO: add i18n translation for error messages, success messages, and other messages and labels
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Partial<User | string>> {
    const user = await this.usersService.findOneByUsername(username);
    if (
      (user && user.password === password) ||
      (await bcrypt.compare(password, user.password))
    ) {
      await this.usersService.loggedInUser(user);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      result.lastLoginDate = new Date();
      return result;
    }
    throw new Error('Invalid username or password');
  }
}
