import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  create(
    createProdutoDto: CreateProdutoDto,
  ): Promise<CreateProdutoDto & Produto> {
    return this.produtoRepository.save(createProdutoDto);
  }

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<UpdateResult> {
    return this.produtoRepository.update(id, updateProdutoDto);
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
