import { Module } from '@nestjs/common';
import { AdministradorModule } from './administrador.module';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';

@Module({
  imports: [AdministradorModule],
  providers: [AdministradorService],
  controllers: [AdministradorController],
})
export class AdministradorHttpModule {}
