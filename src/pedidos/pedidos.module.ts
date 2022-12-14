import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
  controllers: [PedidosController],
  providers: [PedidosService],
  exports: [TypeOrmModule],
})
export class PedidosModule {}
