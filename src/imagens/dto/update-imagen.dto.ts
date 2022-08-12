import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenDto } from './create-imagen.dto';
import { IsInt } from 'class-validator';

export class UpdateImagenDto extends PartialType(CreateImagenDto) {
  @IsInt()
  id: number;
}
