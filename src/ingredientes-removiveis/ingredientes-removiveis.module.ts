import { Module } from '@nestjs/common';
import { IngredientesRemoviveisService } from './ingredientes-removiveis.service';
import { IngredientesRemoviveisController } from './ingredientes-removiveis.controller';

@Module({
  controllers: [IngredientesRemoviveisController],
  providers: [IngredientesRemoviveisService]
})
export class IngredientesRemoviveisModule {}
