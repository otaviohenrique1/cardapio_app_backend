import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  create(
    createEmpresaDto: CreateEmpresaDto,
  ): Promise<CreateEmpresaDto & Empresa> {
    return this.empresaRepository.save(createEmpresaDto);
  }

  findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  findOne(id: number): Promise<Empresa> {
    return this.empresaRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateEmpresaDto: UpdateEmpresaDto,
  ): Promise<UpdateResult> {
    return this.empresaRepository.update(id, updateEmpresaDto);
  }

  async remove(id: number): Promise<void> {
    await this.empresaRepository.delete(id);
  }
}
