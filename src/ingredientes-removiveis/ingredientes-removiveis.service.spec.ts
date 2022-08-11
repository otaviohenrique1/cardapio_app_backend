import { Test, TestingModule } from '@nestjs/testing';
import { IngredientesRemoviveisService } from './ingredientes-removiveis.service';

describe('IngredientesRemoviveisService', () => {
  let service: IngredientesRemoviveisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientesRemoviveisService],
    }).compile();

    service = module.get<IngredientesRemoviveisService>(IngredientesRemoviveisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
