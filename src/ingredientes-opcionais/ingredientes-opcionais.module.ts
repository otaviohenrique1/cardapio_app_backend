import { Module } from '@nestjs/common';
import { IngredientesOpcionaisService } from './ingredientes-opcionais.service';
import { IngredientesOpcionaisController } from './ingredientes-opcionais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredienteOpcional } from './entities/ingrediente-opcional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IngredienteOpcional])],
  controllers: [IngredientesOpcionaisController],
  providers: [IngredientesOpcionaisService],
  exports: [TypeOrmModule],
})
export class IngredientesOpcionaisModule {}
