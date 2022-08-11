import { Test, TestingModule } from '@nestjs/testing';
import { IngredientesRemoviveisController } from './ingredientes-removiveis.controller';
import { IngredientesRemoviveisService } from './ingredientes-removiveis.service';

describe('IngredientesRemoviveisController', () => {
  let controller: IngredientesRemoviveisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientesRemoviveisController],
      providers: [IngredientesRemoviveisService],
    }).compile();

    controller = module.get<IngredientesRemoviveisController>(IngredientesRemoviveisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
