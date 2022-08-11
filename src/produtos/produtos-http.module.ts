import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos.module';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';

@Module({
  imports: [ProdutosModule],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosHttpModule {}
