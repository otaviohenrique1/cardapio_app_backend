import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientesOpcionaisService } from './ingredientes-opcionais.service';
import { CreateIngredienteOpcionalDto } from './dto/create-ingrediente-opcional.dto';
import { UpdateIngredienteOpcionalDto } from './dto/update-ingrediente-opcional.dto';

@Controller('ingredientes-opcionais')
export class IngredientesOpcionaisController {
  constructor(
    private readonly ingredientesOpcionaisService: IngredientesOpcionaisService,
  ) {}

  @Post()
  create(@Body() createIngredienteOpcionalDto: CreateIngredienteOpcionalDto) {
    return this.ingredientesOpcionaisService.create(
      createIngredienteOpcionalDto,
    );
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
  update(
    @Param('id') id: string,
    @Body() updateIngredienteOpcionalDto: UpdateIngredienteOpcionalDto,
  ) {
    return this.ingredientesOpcionaisService.update(
      +id,
      updateIngredienteOpcionalDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesOpcionaisService.remove(+id);
  }
}
