import { Injectable } from '@nestjs/common';
import { CreateIngredientesRemoviveiDto } from './dto/create-ingredientes-removivei.dto';
import { UpdateIngredientesRemoviveiDto } from './dto/update-ingredientes-removivei.dto';

@Injectable()
export class IngredientesRemoviveisService {
  create(createIngredientesRemoviveiDto: CreateIngredientesRemoviveiDto) {
    return 'This action adds a new ingredientesRemovivei';
  }

  findAll() {
    return `This action returns all ingredientesRemoviveis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientesRemovivei`;
  }

  update(id: number, updateIngredientesRemoviveiDto: UpdateIngredientesRemoviveiDto) {
    return `This action updates a #${id} ingredientesRemovivei`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientesRemovivei`;
  }
}
