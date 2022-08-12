import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsString()
  codigo: string;

  @IsDate()
  data_cadastro: Date;

  @IsDate()
  data_modificacao_cadastro: Date;

  @IsNumber()
  preco: number;

  @IsString()
  descricao: string;

  @IsNumber()
  quantidade_estoque: number;

  @IsString()
  unidade_quantidade_estoque: string; // unidade, ml, l, mg, g, kg

  @IsNumber()
  quantidade_embalagem: number;

  @IsString()
  unidade_quantidade_embalagem: string; // unidade, ml, l, mg, g, kg

  @IsString()
  tipo_produto: string; // ('comida' e 'bebida')
}
