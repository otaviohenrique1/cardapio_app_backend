import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientesRemoviveisService } from './ingredientes-removiveis.service';
import { CreateIngredienteRemovivelDto } from './dto/create-ingrediente-removivel.dto';
import { UpdateIngredienteRemovivelDto } from './dto/update-ingrediente-removivel.dto';

@Controller('ingredientes-removiveis')
export class IngredientesRemoviveisController {
  constructor(
    private readonly ingredientesRemoviveisService: IngredientesRemoviveisService,
  ) {}

  @Post()
  create(@Body() createIngredienteRemovivelDto: CreateIngredienteRemovivelDto) {
    return this.ingredientesRemoviveisService.create(
      createIngredienteRemovivelDto,
    );
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
  update(
    @Param('id') id: string,
    @Body() updateIngredienteRemovivelDto: UpdateIngredienteRemovivelDto,
  ) {
    return this.ingredientesRemoviveisService.update(
      +id,
      updateIngredienteRemovivelDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesRemoviveisService.remove(+id);
  }
}
