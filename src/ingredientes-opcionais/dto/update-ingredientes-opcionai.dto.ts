import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientesOpcionaiDto } from './create-ingredientes-opcionai.dto';

export class UpdateIngredientesOpcionaiDto extends PartialType(CreateIngredientesOpcionaiDto) {}
