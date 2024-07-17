import { Expense } from 'src/features/expenses/entities/expense.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('expenseTypes')
export class ExpenseType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  description: string;

  @OneToMany(() => Expense, (expense) => expense.expenseType)
  expenses: Expense[];
}
