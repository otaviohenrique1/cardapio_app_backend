import { IsString, IsDate } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  codigo: string;

  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  senha: string;

  @IsString()
  telefone: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  cep: string;

  @IsDate()
  data_cadastro: Date;

  @IsDate()
  data_modificacao_cadastro: Date;
}
