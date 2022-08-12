import { IsString } from 'class-validator';

export class CreateImagenDto {
  @IsString()
  path: string;
}
