import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  findAll(): Promise<Expense[]> {
    return this.expenseRepository.find();
  }

  findOne(id: number): Promise<Expense> {
    return this.expenseRepository.findOneBy({ id });
  }

  create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const expense: Expense = new Expense();
    expense.amount = createExpenseDto.amount;
    expense.expenseTypeId = createExpenseDto.expenseTypeId
      ? createExpenseDto.expenseTypeId
      : -1;
    expense.userId = createExpenseDto.userId;
    expense.expenseDate = new Date();
    expense.description = createExpenseDto.description;
    expense.paidTo = createExpenseDto.paidTo;
    expense.title = createExpenseDto.title;
    expense.metadata = {};
    return this.expenseRepository.save(expense);
  }

  async remove(id: number): Promise<void> {
    await this.expenseRepository.delete(id);
  }

  findAllByUser(userId: number): Promise<Expense[]> {
    return this.expenseRepository.find({ where: { userId } });
  }
}
