import { IsString, IsDate, IsBoolean } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  nome: string;

  @IsString()
  codigo: string;

  @IsDate()
  data_cadastro: Date;

  @IsDate()
  data_modificacao_cadastro: Date;

  @IsString()
  email: string;

  @IsString()
  senha: string;

  @IsBoolean()
  status_cadastro: boolean;
}
