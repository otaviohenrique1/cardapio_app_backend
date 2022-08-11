import { Empresa } from 'src/empresas/entities/empresa.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToMany,
} from 'typeorm';

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  /* 1 administrador para muitas empresas cadastradas */
  @OneToMany(() => Empresa, (empresa) => empresa.administrador, {
    cascade: ['insert', 'update'],
  })
  empresas: Empresa[];
}
