import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredienteRemovivelDto } from './create-ingrediente-removivel.dto';
import { IsInt } from 'class-validator';

export class UpdateIngredienteRemovivelDto extends PartialType(
  CreateIngredienteRemovivelDto,
) {
  @IsInt()
  id: number;
}
