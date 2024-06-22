import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get('/getAll')
  findAll(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Get('/findbyid/:id')
  findOne(@Param('id') id: number): Promise<Expense> {
    return this.expenseService.findOne(id);
  }

  @Post('/create')
  create(@Body() expense: CreateExpenseDto): Promise<Expense> {
    return this.expenseService.create(expense);
  }

  @Get('/getAllByUser/:userId')
  findAllByUser(@Param('userId') userId: number): Promise<Expense[]> {
    return this.expenseService.findAllByUser(userId);
  }
}
