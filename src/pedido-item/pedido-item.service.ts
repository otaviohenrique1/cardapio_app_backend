import { Injectable } from '@nestjs/common';
import { CreatePedidoItemDto } from './dto/create-pedido-item.dto';
import { UpdatePedidoItemDto } from './dto/update-pedido-item.dto';

@Injectable()
export class PedidoItemService {
  create(createPedidoItemDto: CreatePedidoItemDto) {
    return 'This action adds a new pedidoItem';
  }

  findAll() {
    return `This action returns all pedidoItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoItem`;
  }

  update(id: number, updatePedidoItemDto: UpdatePedidoItemDto) {
    return `This action updates a #${id} pedidoItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoItem`;
  }
}
