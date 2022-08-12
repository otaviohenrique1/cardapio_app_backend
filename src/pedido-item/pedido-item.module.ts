import { Module } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItemController } from './pedido-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoItem } from './entities/pedido-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoItem])],
  controllers: [PedidoItemController],
  providers: [PedidoItemService],
  exports: [TypeOrmModule],
})
export class PedidoItemModule {}
