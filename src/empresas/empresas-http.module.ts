import { Module } from '@nestjs/common';
import { EmpresasModule } from './empresas.module';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';

@Module({
  imports: [EmpresasModule],
  providers: [EmpresasService],
  controllers: [EmpresasController],
})
export class EmpresasHttpModule {}
