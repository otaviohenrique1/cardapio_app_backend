import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import {
  Entity,
  Column,
  // OneToMany,
  Generated,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  /* muitos clientes cadastrados para 1 empresa  */
  @ManyToOne(() => Empresa, (empresa) => empresa.clientes)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @Column({ type: 'integer', unsigned: true })
  empresaId: number;

  /* 1 ou mais pedidos para 1 cliente */
  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[];
}
