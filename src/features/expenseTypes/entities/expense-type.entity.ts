import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('expenseTypes')
export class ExpenseType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  description: string;
}
