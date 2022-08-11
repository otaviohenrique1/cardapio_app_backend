import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';
import { PedidoItem } from 'src/pedido-item/entities/pedido-item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ingrediente_removivel')
export class IngredienteRemovivel {
  @PrimaryGeneratedColumn()
  id: number;

  /* Arrumar */
  /* Ver se vai mudar de 'OneToOne' para 'OneToMany'*/
  @OneToOne(
    () => Ingrediente,
    (ingrediente) => ingrediente.ingrediente_removivel,
  )
  @JoinColumn({ name: 'ingredienteId' })
  ingrediente: Ingrediente;

  @Column({ type: 'integer', unsigned: true })
  ingredienteId: number;

  /* muitos removiveis em 1 pedido */
  @ManyToOne(
    () => PedidoItem,
    (pedido_refeicao) => pedido_refeicao.ingredientes_removidos,
  )
  @JoinColumn({ name: 'pedidoProdutoId' })
  pedido_produto: PedidoItem;

  @Column({ type: 'integer', unsigned: true })
  pedidoProdutoId: number;
}
