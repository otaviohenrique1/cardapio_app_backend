import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoItemDto } from './create-pedido-item.dto';
import { IsInt } from 'class-validator';

export class UpdatePedidoItemDto extends PartialType(CreatePedidoItemDto) {
  @IsInt()
  id: number;
}
