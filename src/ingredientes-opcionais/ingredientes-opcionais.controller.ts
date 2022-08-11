import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientesOpcionaisService } from './ingredientes-opcionais.service';
import { CreateIngredientesOpcionaiDto } from './dto/create-ingredientes-opcionai.dto';
import { UpdateIngredientesOpcionaiDto } from './dto/update-ingredientes-opcionai.dto';

@Controller('ingredientes-opcionais')
export class IngredientesOpcionaisController {
  constructor(private readonly ingredientesOpcionaisService: IngredientesOpcionaisService) {}

  @Post()
  create(@Body() createIngredientesOpcionaiDto: CreateIngredientesOpcionaiDto) {
    return this.ingredientesOpcionaisService.create(createIngredientesOpcionaiDto);
  }

  @Get()
  findAll() {
    return this.ingredientesOpcionaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientesOpcionaisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientesOpcionaiDto: UpdateIngredientesOpcionaiDto) {
    return this.ingredientesOpcionaisService.update(+id, updateIngredientesOpcionaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesOpcionaisService.remove(+id);
  }
}
