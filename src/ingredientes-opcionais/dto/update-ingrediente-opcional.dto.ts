import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredienteOpcionalDto } from './create-ingrediente-opcional.dto';
import { IsInt } from 'class-validator';

export class UpdateIngredienteOpcionalDto extends PartialType(
  CreateIngredienteOpcionalDto,
) {
  @IsInt()
  id: number;
}
