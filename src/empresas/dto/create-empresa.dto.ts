import { IsString, IsDate, IsBoolean } from 'class-validator';

export class CreateEmpresaDto {
  nome: string;
  codigo: string;
  data_cadastro: Date;
  data_modificacao_cadastro: Date;
  email: string;
  senha: string;
  status_cadastro: boolean;
}
