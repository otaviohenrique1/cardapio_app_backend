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
    ClientesModule,
    ProdutosModule,
    EmpresasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
