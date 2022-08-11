import { Module } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItemController } from './pedido-item.controller';

@Module({
  controllers: [PedidoItemController],
  providers: [PedidoItemService]
})
export class PedidoItemModule {}
