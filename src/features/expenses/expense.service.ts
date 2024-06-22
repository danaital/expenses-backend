import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';

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

  create(expense: Expense): Promise<Expense> {
    return this.expenseRepository.save(expense);
  }

  async remove(id: number): Promise<void> {
    await this.expenseRepository.delete(id);
  }
}
