import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientesRemoviveiDto } from './create-ingredientes-removivei.dto';

export class UpdateIngredientesRemoviveiDto extends PartialType(CreateIngredientesRemoviveiDto) {}
