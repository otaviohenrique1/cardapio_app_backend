import { Test, TestingModule } from '@nestjs/testing';
import { IngredientesOpcionaisService } from './ingredientes-opcionais.service';

describe('IngredientesOpcionaisService', () => {
  let service: IngredientesOpcionaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientesOpcionaisService],
    }).compile();

    service = module.get<IngredientesOpcionaisService>(IngredientesOpcionaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
