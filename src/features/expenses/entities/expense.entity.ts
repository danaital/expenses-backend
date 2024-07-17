import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ExpenseType } from '../../expenseTypes/entities/expense-type.entity';
export const ExpenseRelations = {
  relations: {
    expenseType: true,
  },
};

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  // TODO: add expense kind : One Time, Weekly, Monthly, Yearly, Bi-Weekly, Quarterly, Semi-Annually, Annually
  @Column()
  expenseTypeId: number;

  @ManyToOne(() => ExpenseType, (expenseType) => expenseType.expenses)
  @JoinColumn({ name: 'expenseTypeId', referencedColumnName: 'id' })
  expenseType: ExpenseType;

  @Column({ length: 100 })
  title: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ length: 255, default: '' })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  expenseDate: Date;

  @Column({ length: 100, default: '' })
  paidTo: string;

  @Column({ type: 'jsonb', default: '{}' })
  metadata: Record<string, any>;
}
