import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  create(createPedidoDto: CreatePedidoDto): Promise<CreatePedidoDto & Pedido> {
    return this.pedidoRepository.save(createPedidoDto);
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  findOne(id: number): Promise<Pedido> {
    return this.pedidoRepository.findOneBy({ id });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<UpdateResult> {
    return this.pedidoRepository.update(id, updatePedidoDto);
  }

  async remove(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
