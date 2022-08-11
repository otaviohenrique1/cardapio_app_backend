import { Test, TestingModule } from '@nestjs/testing';
import { IngredientesOpcionaisController } from './ingredientes-opcionais.controller';
import { IngredientesOpcionaisService } from './ingredientes-opcionais.service';

describe('IngredientesOpcionaisController', () => {
  let controller: IngredientesOpcionaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientesOpcionaisController],
      providers: [IngredientesOpcionaisService],
    }).compile();

    controller = module.get<IngredientesOpcionaisController>(IngredientesOpcionaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
