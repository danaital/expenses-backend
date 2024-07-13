import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseTypesController } from './expense-type.controller';
import { ExpenseTypesService } from './expense-type.service';

describe('ExpenseTypeController', () => {
  let controller: ExpenseTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseTypesController],
      providers: [
        ExpenseTypesService,
        { provide: 'ExpenseTypeRepository', useValue: {} },
      ],
    }).compile();

    controller = module.get<ExpenseTypesController>(ExpenseTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
