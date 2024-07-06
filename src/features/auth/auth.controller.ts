import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // TODO: add i18n translation for error messages, success messages, and other messages and labels
  // TODO: add jwt
  // TODO: add salt rounds to config
  // TODO: add validation
  // TODO: add logging
  // TODO: add error handling
  // TODO: add unit tests
  // TODO: add e2e tests
  // TODO: add DTOs for request and response objects
  @Post('login')
  login(@Body() body: any) {
    const { username, password } = body;
    return this.authService.validateUser(username, password);
  }
}
