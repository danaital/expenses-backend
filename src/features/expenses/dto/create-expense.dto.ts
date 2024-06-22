import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateExpenseDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  paidTo: string;

  @IsNumber()
  expenseTypeId?: number;
}
