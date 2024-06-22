import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './features/users/entities/user.entity';
import { UsersModule } from './features/users/users.module';
import { AuthModule } from './features/auth/auth.module';
import { RegisterModule } from './features/register/register.module';
import { ExpenseModule } from './features/expenses/expense.module';
import { Expense } from './features/expenses/entities/expense.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 54322,
      database: 'Expenses-App',
      username: 'postgres',
      synchronize: true,
      logging: true,
      entities: [User, Expense],
    }),
    UsersModule,
    AuthModule,
    RegisterModule,
    ExpenseModule,
    //https://medium.com/simform-engineering/nestjs-and-postgresql-a-crud-tutorial-32aa78778752
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
