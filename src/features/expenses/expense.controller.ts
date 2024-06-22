import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './entities/expense.entity';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get('/getAll')
  findAll(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Expense> {
    return this.expenseService.findOne(id);
  }

  @Post('/create')
  create(@Body() expense: Expense): Promise<Expense> {
    return this.expenseService.create(expense);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.expenseService.remove(id);
  }
}
