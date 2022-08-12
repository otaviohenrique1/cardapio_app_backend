import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateIngredienteOpcionalDto } from './dto/create-ingrediente-opcional.dto';
import { UpdateIngredienteOpcionalDto } from './dto/update-ingrediente-opcional.dto';
import { IngredienteOpcional } from './entities/ingrediente-opcional.entity';

@Injectable()
export class IngredientesOpcionaisService {
  constructor(
    @InjectRepository(IngredienteOpcional)
    private ingredienteOpcionalRepository: Repository<IngredienteOpcional>,
  ) {}

  create(
    createIngredientesOpcionaiDto: CreateIngredienteOpcionalDto,
  ): Promise<CreateIngredienteOpcionalDto & IngredienteOpcional> {
    return this.ingredienteOpcionalRepository.save(
      createIngredientesOpcionaiDto,
    );
  }

  findAll(): Promise<IngredienteOpcional[]> {
    return this.ingredienteOpcionalRepository.find();
  }

  findOne(id: number): Promise<IngredienteOpcional> {
    return this.ingredienteOpcionalRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateIngredienteOpcionalDto: UpdateIngredienteOpcionalDto,
  ): Promise<UpdateResult> {
    return this.ingredienteOpcionalRepository.update(
      id,
      updateIngredienteOpcionalDto,
    );
  }

  async remove(id: number): Promise<void> {
    await this.ingredienteOpcionalRepository.delete(id);
  }
}
