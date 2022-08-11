import { Module } from '@nestjs/common';
import { IngredientesOpcionaisService } from './ingredientes-opcionais.service';
import { IngredientesOpcionaisController } from './ingredientes-opcionais.controller';

@Module({
  controllers: [IngredientesOpcionaisController],
  providers: [IngredientesOpcionaisService]
})
export class IngredientesOpcionaisModule {}
