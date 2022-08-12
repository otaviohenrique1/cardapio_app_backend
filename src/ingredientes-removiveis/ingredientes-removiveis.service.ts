import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateIngredienteRemovivelDto } from './dto/create-ingrediente-removivel.dto';
import { UpdateIngredienteRemovivelDto } from './dto/update-ingrediente-removivel.dto';
import { IngredienteRemovivel } from './entities/ingrediente-removivel.entity';

@Injectable()
export class IngredientesRemoviveisService {
  constructor(
    @InjectRepository(IngredienteRemovivel)
    private ingredienteRemovivelRepository: Repository<IngredienteRemovivel>,
  ) {}

  create(
    createIngredienteRemovivelDto: CreateIngredienteRemovivelDto,
  ): Promise<CreateIngredienteRemovivelDto & IngredienteRemovivel> {
    return this.ingredienteRemovivelRepository.save(
      createIngredienteRemovivelDto,
    );
  }

  findAll(): Promise<IngredienteRemovivel[]> {
    return this.ingredienteRemovivelRepository.find();
  }

  findOne(id: number): Promise<IngredienteRemovivel> {
    return this.ingredienteRemovivelRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateIngredienteRemovivelDto: UpdateIngredienteRemovivelDto,
  ): Promise<UpdateResult> {
    return this.ingredienteRemovivelRepository.update(
      id,
      updateIngredienteRemovivelDto,
    );
  }

  async remove(id: number): Promise<void> {
    await this.ingredienteRemovivelRepository.delete(id);
  }
}
