import { IsNumber } from 'class-validator';

export class CreatePedidoItemDto {
  @IsNumber()
  quantidade: number;
}
