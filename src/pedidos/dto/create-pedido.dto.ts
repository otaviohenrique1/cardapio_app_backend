import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreatePedidoDto {
  @IsString()
  status_pedido: string; // 'em produção', 'em transporte' e 'entregue'

  @IsNumber()
  preco_total: number; // Preco de cada refeicao e cada opcional acicionado

  @IsString()
  codigo: string;

  @IsString()
  observacao: string;

  @IsDate()
  data_cadastro: Date;

  @IsDate()
  data_modificacao_cadastro: Date;
}
