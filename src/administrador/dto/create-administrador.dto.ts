import { IsString, IsDate } from 'class-validator';

export class CreateAdministradorDto {
  @IsString()
  nome: string;

  @IsString()
  codigo: string;

  @IsString()
  email: string;

  @IsDate()
  data_cadastro: Date;

  @IsDate()
  data_modificacao_cadastro: Date;
}
