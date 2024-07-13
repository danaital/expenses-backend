import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateExpenseTypeDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}
