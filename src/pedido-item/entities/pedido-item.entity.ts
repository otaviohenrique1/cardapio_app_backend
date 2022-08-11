import { IngredienteOpcional } from 'src/ingredientes-opcionais/entities/ingrediente-opcional.entity';
import { IngredienteRemovivel } from 'src/ingredientes-removiveis/entities/ingrediente-removivel.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pedido_item')
export class PedidoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  /* Arrumar */
  /* Ver se vai mudar de 'OneToOne' para 'OneToMany'*/
  /* Ver se vai renomear de 'refeicaoId' para produtoId */
  @OneToOne(() => Produto, (produto) => produto.pedido_item)
  @JoinColumn({ name: 'produtoId' })
  refeicao: Produto;

  /* Ver se vai renomear de 'refeicaoId' para produtoId */
  @Column({ type: 'integer', unsigned: true })
  produtoId: number;

  /* muitas refeicoes em 1 pedido */
  @ManyToOne(() => Pedido, (pedido) => pedido.lista_refeicoes)
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido;

  @Column({ type: 'integer', unsigned: true })
  pedidoId: number;

  /* 1 refeicao do pedido pode ter nenhum ou 1 ou mais opcionais */
  /* Ver se vai ser opcional */
  @OneToMany(() => IngredienteOpcional, (opcional) => opcional.pedido_item, {
    cascade: ['insert'],
  })
  ingredientes_opcionais: IngredienteOpcional[];

  /* Nenhum ou 1 ou mais ingredientes podem ser removidos de 1 refeicao */
  /* Ver se vai ser opcional */
  @OneToMany(
    () => IngredienteRemovivel,
    (ingrediente_removido) => ingrediente_removido.pedido_produto,
    {
      cascade: ['insert'],
    },
  )
  ingredientes_removidos: IngredienteRemovivel[];
}
