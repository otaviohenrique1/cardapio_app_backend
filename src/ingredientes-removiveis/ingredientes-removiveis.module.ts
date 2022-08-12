import { Module } from '@nestjs/common';
import { IngredientesRemoviveisService } from './ingredientes-removiveis.service';
import { IngredientesRemoviveisController } from './ingredientes-removiveis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredienteRemovivel } from './entities/ingrediente-removivel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IngredienteRemovivel])],
  controllers: [IngredientesRemoviveisController],
  providers: [IngredientesRemoviveisService],
  exports: [TypeOrmModule],
})
export class IngredientesRemoviveisModule {}
