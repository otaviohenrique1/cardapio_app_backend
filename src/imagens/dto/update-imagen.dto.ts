import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenDto } from './create-imagen.dto';

export class UpdateImagenDto extends PartialType(CreateImagenDto) {}
