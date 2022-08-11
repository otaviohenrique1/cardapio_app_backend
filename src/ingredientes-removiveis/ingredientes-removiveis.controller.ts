import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientesRemoviveisService } from './ingredientes-removiveis.service';
import { CreateIngredientesRemoviveiDto } from './dto/create-ingredientes-removivei.dto';
import { UpdateIngredientesRemoviveiDto } from './dto/update-ingredientes-removivei.dto';

@Controller('ingredientes-removiveis')
export class IngredientesRemoviveisController {
  constructor(private readonly ingredientesRemoviveisService: IngredientesRemoviveisService) {}

  @Post()
  create(@Body() createIngredientesRemoviveiDto: CreateIngredientesRemoviveiDto) {
    return this.ingredientesRemoviveisService.create(createIngredientesRemoviveiDto);
  }

  @Get()
  findAll() {
    return this.ingredientesRemoviveisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientesRemoviveisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientesRemoviveiDto: UpdateIngredientesRemoviveiDto) {
    return this.ingredientesRemoviveisService.update(+id, updateIngredientesRemoviveiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesRemoviveisService.remove(+id);
  }
}
