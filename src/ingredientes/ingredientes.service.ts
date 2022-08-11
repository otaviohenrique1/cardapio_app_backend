import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente } from './entities/ingrediente.entity';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private ingredienteRepository: Repository<Ingrediente>,
  ) {}

  create(
    createIngredienteDto: CreateIngredienteDto,
  ): Promise<CreateIngredienteDto & Ingrediente> {
    return this.ingredienteRepository.save(createIngredienteDto);
  }

  findAll(): Promise<Ingrediente[]> {
    return this.ingredienteRepository.find();
  }

  findOne(id: number): Promise<Ingrediente> {
    return this.ingredienteRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateIngredienteDto: UpdateIngredienteDto,
  ): Promise<UpdateResult> {
    return this.ingredienteRepository.update(id, updateIngredienteDto);
  }

  async remove(id: number): Promise<void> {
    await this.ingredienteRepository.delete(id);
  }
}
