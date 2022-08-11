import { Cliente } from 'src/clientes/entities/cliente.entity';
import { PedidoItem } from 'src/pedido-item/entities/pedido-item.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status_pedido: string; // 'em produção', 'em transporte' e 'entregue'

  @Column()
  preco_total: number; // Preco de cada refeicao e cada opcional acicionado

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  observacao: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  /* 1 pedido para 1 cliente */
  @OneToMany(() => Cliente, (cliente) => cliente.pedidos, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;

  @Column({ type: 'integer', unsigned: true })
  clienteId: number;

  /* 1 pedido com 1 ou mais itens */
  @OneToMany(() => PedidoItem, (item) => item.pedido, {
    cascade: ['insert'],
  })
  lista_refeicoes: PedidoItem[];
}
