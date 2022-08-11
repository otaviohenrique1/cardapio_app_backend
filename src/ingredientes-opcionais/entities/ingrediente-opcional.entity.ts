import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';
import { PedidoItem } from 'src/pedido-item/entities/pedido-item.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ingrediente_opcional')
export class IngredienteOpcional {
  @PrimaryGeneratedColumn()
  id: number;

  /* Arrumar */
  /* Ver se vai mudar de 'OneToOne' para 'OneToMany'*/
  @OneToOne(
    () => Ingrediente,
    (ingrediente) => ingrediente.ingrediente_opcional,
  )
  @JoinColumn({ name: 'ingredienteId' })
  ingrediente: Ingrediente;

  @Column({ type: 'integer', unsigned: true })
  ingredienteId: number;

  /* muitos ingredientes opcionais em 1 item do pedido */
  @ManyToOne(
    () => PedidoItem,
    (pedido_produto) => pedido_produto.ingredientes_opcionais,
  )
  @JoinColumn({ name: 'pedidoItemId' })
  pedido_item: PedidoItem;

  @Column({ type: 'integer', unsigned: true })
  pedidoItemId: number;

  /* muitos ingredientes opcionais em 1 item da refeicao */
  @ManyToOne(() => Produto, (produto) => produto.lista_opcionais)
  @JoinColumn({ name: 'produtoId' })
  produto: Produto;

  @Column({ type: 'integer', unsigned: true })
  produtoId: number;
}
