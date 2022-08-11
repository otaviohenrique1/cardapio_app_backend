import { Injectable } from '@nestjs/common';
import { CreateIngredientesOpcionaiDto } from './dto/create-ingredientes-opcionai.dto';
import { UpdateIngredientesOpcionaiDto } from './dto/update-ingredientes-opcionai.dto';

@Injectable()
export class IngredientesOpcionaisService {
  create(createIngredientesOpcionaiDto: CreateIngredientesOpcionaiDto) {
    return 'This action adds a new ingredientesOpcionai';
  }

  findAll() {
    return `This action returns all ingredientesOpcionais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientesOpcionai`;
  }

  update(id: number, updateIngredientesOpcionaiDto: UpdateIngredientesOpcionaiDto) {
    return `This action updates a #${id} ingredientesOpcionai`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientesOpcionai`;
  }
}
