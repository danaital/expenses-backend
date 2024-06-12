import { CreateUserDto } from './dto/create-user.dto';
import { RegisterService } from './register.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('newuser')
  register(@Body() body: CreateUserDto): Promise<CreateUserDto> {
    console.log('body: ', body);
    return this.registerService.create(body);
  }
}
