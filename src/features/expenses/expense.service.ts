import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense, ExpenseRelations } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  findAll(): Promise<Expense[]> {
    return this.expenseRepository.find(ExpenseRelations);
  }

  findOne(id: number): Promise<Expense> {
    return this.expenseRepository.findOne({
      where: { id },
      ...ExpenseRelations,
    });
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
    return this.expenseRepository.find({
      where: { userId },
      ...ExpenseRelations,
    });
  }

  async update(
    id: number,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expense> {
    const expense = await this.expenseRepository.preload({
      id: id,
      ...updateExpenseDto,
    });
    if (!expense) {
      throw new NotFoundException(`Expense with ID ${id} not found`);
    }
    return this.expenseRepository.save(expense);
  }
}
