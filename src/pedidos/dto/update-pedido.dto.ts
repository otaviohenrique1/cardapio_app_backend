import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsInt } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
  @IsInt()
  id: number;
}
