import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'username must have atleast 2 characters.' })
  username: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(1, { message: 'First Name must have atleast 1 characters.' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(1, {
    message: 'Last Name (surname) must have atleast 1 characters.',
  })
  lastName: string;

  @IsString()
  middleName?: string;

  @IsString()
  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters,
      at least one uppercase letter,
      one lowercase letter,
      one number and
      one special character`,
  })
  password: string;
}
