import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradorDto } from './create-administrador.dto';
import { IsInt } from 'class-validator';

export class UpdateAdministradorDto extends PartialType(
  CreateAdministradorDto,
) {
  @IsInt()
  id: number;
}
