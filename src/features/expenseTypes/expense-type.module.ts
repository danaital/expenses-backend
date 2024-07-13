import { Module } from '@nestjs/common';
import { ExpenseTypesService } from './expense-type.service';
import { ExpenseTypesController } from './expense-type.controller';
import { ExpenseType } from './entities/expense-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseType])],
  controllers: [ExpenseTypesController],
  providers: [ExpenseTypesService],
})
export class ExpenseTypeModule {}
