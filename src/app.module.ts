import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorModule } from './administrador/administrador.module';
import { DataSource } from 'typeorm';
import { Administrador } from './administrador/entities/administrador.entity';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { EmpresasModule } from './empresas/empresas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ImagensModule } from './imagens/imagens.module';
import { PedidoItemModule } from './pedido-item/pedido-item.module';
import { IngredientesOpcionaisModule } from './ingredientes-opcionais/ingredientes-opcionais.module';
import { IngredientesRemoviveisModule } from './ingredientes-removiveis/ingredientes-removiveis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cardapio_app_backend',
      entities: [Administrador],
      synchronize:
        true /* AVISO => A configuração synchronize: true não deve ser usada na produção - caso contrário, você poderá perder dados de produção. */,
    }),
    AdministradorModule,
    EmpresasModule,
    ClientesModule,
    ProdutosModule,
    IngredientesModule,
    ImagensModule,
    PedidosModule,
    PedidoItemModule,
    IngredientesOpcionaisModule,
    IngredientesRemoviveisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
