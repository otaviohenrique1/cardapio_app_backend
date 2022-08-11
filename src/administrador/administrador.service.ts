import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Administrador } from './entities/administrador.entity';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private administradorRepository: Repository<Administrador>,
  ) {}

  create(
    createAdministradorDto: CreateAdministradorDto,
  ): Promise<CreateAdministradorDto & Administrador> {
    return this.administradorRepository.save(createAdministradorDto);
  }

  findAll(): Promise<Administrador[]> {
    return this.administradorRepository.find();
  }

  findOne(id: number): Promise<Administrador> {
    return this.administradorRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateAdministradorDto: UpdateAdministradorDto,
  ): Promise<UpdateResult> {
    return this.administradorRepository.update(id, updateAdministradorDto);
  }

  async remove(id: number): Promise<void> {
    await this.administradorRepository.delete(id);
  }
}
