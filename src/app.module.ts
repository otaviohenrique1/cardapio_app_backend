import { Module } from '@nestjs/common';
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
import { Empresa } from './empresas/entities/empresa.entity';
import { Cliente } from './clientes/entities/cliente.entity';
import { Produto } from './produtos/entities/produto.entity';
import { Imagem } from './imagens/entities/imagem.entity';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';
import { IngredienteOpcional } from './ingredientes-opcionais/entities/ingrediente-opcional.entity';
import { IngredienteRemovivel } from './ingredientes-removiveis/entities/ingrediente-removivel.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { PedidoItem } from './pedido-item/entities/pedido-item.entity';
import { AuthModule } from './auth/auth.module';
import { AdministradorController } from './administrador/administrador.controller';
import { ClientesController } from './clientes/clientes.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { ImagensController } from './imagens/imagens.controller';
import { IngredientesOpcionaisController } from './ingredientes-opcionais/ingredientes-opcionais.controller';
import { IngredientesRemoviveisController } from './ingredientes-removiveis/ingredientes-removiveis.controller';
import { IngredientesController } from './ingredientes/ingredientes.controller';
import { PedidoItemController } from './pedido-item/pedido-item.controller';
import { PedidosController } from './pedidos/pedidos.controller';
import { ProdutosController } from './produtos/produtos.controller';
import { AdministradorService } from './administrador/administrador.service';
import { ClientesService } from './clientes/clientes.service';
import { EmpresasService } from './empresas/empresas.service';
import { ImagensService } from './imagens/imagens.service';
import { IngredientesOpcionaisService } from './ingredientes-opcionais/ingredientes-opcionais.service';
import { IngredientesRemoviveisService } from './ingredientes-removiveis/ingredientes-removiveis.service';
import { IngredientesService } from './ingredientes/ingredientes.service';
import { PedidoItemService } from './pedido-item/pedido-item.service';
import { PedidosService } from './pedidos/pedidos.service';
import { ProdutosService } from './produtos/produtos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cardapio_app_backend',
      entities: [
        Administrador,
        Empresa,
        Cliente,
        Produto,
        Imagem,
        Ingrediente,
        IngredienteOpcional,
        IngredienteRemovivel,
        Pedido,
        PedidoItem,
      ],
      synchronize: false,
      // synchronize: true /* AVISO => A configuração synchronize: true não deve ser usada na produção - caso contrário, você poderá perder dados de produção. */,
    }),
    AdministradorModule,
    EmpresasModule,
    ClientesModule,
    ProdutosModule,
    IngredientesModule,
    ImagensModule,
    IngredientesOpcionaisModule,
    IngredientesRemoviveisModule,
    PedidosModule,
    PedidoItemModule,
    AuthModule,
  ],
  controllers: [
    AdministradorController,
    EmpresasController,
    ClientesController,
    ProdutosController,
    IngredientesController,
    ImagensController,
    IngredientesOpcionaisController,
    IngredientesRemoviveisController,
    PedidosController,
    PedidoItemController,
  ],
  providers: [
    AdministradorService,
    EmpresasService,
    ClientesService,
    ProdutosService,
    IngredientesService,
    ImagensService,
    IngredientesOpcionaisService,
    IngredientesRemoviveisService,
    PedidosService,
    PedidoItemService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
