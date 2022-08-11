import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Administrador } from './entities/administrador.entity';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private administradorRepository: Repository<Administrador>,
  ) {}

  create(createAdministradorDto: CreateAdministradorDto) {
    return 'This action adds a new administrador';
  }

  findAll(): Promise<Administrador[]> {
    return this.administradorRepository.find();
  }

  findOne(id: number): Promise<Administrador> {
    return this.administradorRepository.findOneBy({ id });
  }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    return `This action updates a #${id} administrador`;
  }

  async remove(id: string): Promise<void> {
    await this.administradorRepository.delete(id);
  }
}
