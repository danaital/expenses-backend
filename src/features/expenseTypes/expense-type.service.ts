import { Injectable } from '@nestjs/common';
import { CreateExpenseTypeDto } from './dto/create-expense-type.dto';
import { UpdateExpenseTypeDto } from './dto/update-expense-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseType } from './entities/expense-type.entity';

@Injectable()
export class ExpenseTypesService {
  constructor(
    @InjectRepository(ExpenseType)
    private expenseTypeRepository: Repository<ExpenseType>,
  ) {}
  create(createExpenseTypeDto: CreateExpenseTypeDto) {
    const expenseType: ExpenseType = new ExpenseType();
    expenseType.name = createExpenseTypeDto.name;
    expenseType.description = createExpenseTypeDto.description;
    return this.expenseTypeRepository.save(expenseType);
  }

  findAll(): Promise<ExpenseType[]> {
    return this.expenseTypeRepository.find();
  }

  findOne(id: number): Promise<ExpenseType> {
    return this.expenseTypeRepository.findOneBy({ id });
  }

  async update(id: number, updateExpenseTypeDto: UpdateExpenseTypeDto) {
    await this.expenseTypeRepository.update(id, updateExpenseTypeDto);
  }

  async remove(id: number): Promise<void> {
    await this.expenseTypeRepository.delete(id);
  }
}
