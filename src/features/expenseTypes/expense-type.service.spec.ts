import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseTypesService } from './expense-type.service';

describe('ExpenseTypeService', () => {
  let service: ExpenseTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExpenseTypesService,
        { provide: 'ExpenseTypeRepository', useValue: {} },
      ],
    }).compile();

    service = module.get<ExpenseTypesService>(ExpenseTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
