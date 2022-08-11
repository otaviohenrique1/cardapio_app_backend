import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { Imagem } from './entities/imagem.entity';

@Injectable()
export class ImagensService {
  constructor(
    @InjectRepository(Imagem)
    private imagemRepository: Repository<Imagem>,
  ) {}

  create(createImagenDto: CreateImagenDto): Promise<CreateImagenDto & Imagem> {
    return this.imagemRepository.save(createImagenDto);
  }

  findAll(): Promise<Imagem[]> {
    return this.imagemRepository.find();
  }

  findOne(id: number): Promise<Imagem> {
    return this.imagemRepository.findOneBy({ id });
  }

  update(id: number, updateImagenDto: UpdateImagenDto): Promise<UpdateResult> {
    return this.imagemRepository.update(id, updateImagenDto);
  }

  async remove(id: number): Promise<void> {
    await this.imagemRepository.delete(id);
  }
}
