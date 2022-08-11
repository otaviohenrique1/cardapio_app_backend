import { Administrador } from 'src/administrador/entities/administrador.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import {
  Entity,
  Column,
  OneToMany,
  Generated,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('empresa')
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  status_cadastro: boolean; // 'Ativo' ou 'Inativo'

  /* muitas empresas cadastradas por 1 administrador  */
  @ManyToOne(() => Administrador, (administrador) => administrador.empresas)
  @JoinColumn({ name: 'administradorId' })
  administrador: Administrador;

  @Column({ type: 'integer', unsigned: true })
  administradorId: number;

  /* 1 empresa para muitos clientes */
  @OneToMany(() => Cliente, (cliente) => cliente.empresa)
  clientes: Cliente[];

  @OneToMany(() => Produto, (produto) => produto.empresa)
  produtos: Produto[];
}
