import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePedidoItemDto } from './dto/create-pedido-item.dto';
import { UpdatePedidoItemDto } from './dto/update-pedido-item.dto';
import { PedidoItem } from './entities/pedido-item.entity';

@Injectable()
export class PedidoItemService {
  constructor(
    @InjectRepository(PedidoItem)
    private pedidoItemRepository: Repository<PedidoItem>,
  ) {}

  create(
    createPedidoItemDto: CreatePedidoItemDto,
  ): Promise<CreatePedidoItemDto & PedidoItem> {
    return this.pedidoItemRepository.save(createPedidoItemDto);
  }

  findAll(): Promise<PedidoItem[]> {
    return this.pedidoItemRepository.find();
  }

  findOne(id: number): Promise<PedidoItem> {
    return this.pedidoItemRepository.findOneBy({ id });
  }

  update(
    id: number,
    updatePedidoItemDto: UpdatePedidoItemDto,
  ): Promise<UpdateResult> {
    return this.pedidoItemRepository.update(id, updatePedidoItemDto);
  }

  async remove(id: number): Promise<void> {
    await this.pedidoItemRepository.delete(id);
  }
}
