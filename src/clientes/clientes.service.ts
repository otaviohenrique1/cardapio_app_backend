import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  create(
    createClienteDto: CreateClienteDto,
  ): Promise<CreateClienteDto & Cliente> {
    return this.clienteRepository.save(createClienteDto);
  }

  findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  findOne(id: number): Promise<Cliente> {
    return this.clienteRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<UpdateResult> {
    return this.clienteRepository.update(id, updateClienteDto);
  }

  async remove(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
