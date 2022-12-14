import { IngredienteOpcional } from 'src/ingredientes-opcionais/entities/ingrediente-opcional.entity';
import { IngredienteRemovivel } from 'src/ingredientes-removiveis/entities/ingrediente-removivel.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ingrediente')
export class Ingrediente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  quantidade: number;

  @Column()
  unidade_quantidade: string; // unidade, ml, l, mg, g, kg

  @Column()
  removivel: boolean;

  @Column()
  opcional: boolean;

  /*
  @Column()
  removivel: string; // ('Removivel' e 'Não removivel')
  */

  /* 1 ou mais ingredientes para 1 refeicao */
  @ManyToOne(() => Produto, (produto) => produto.ingredientes)
  @JoinColumn({ name: 'produtoId' })
  produto: Produto;

  @Column({ type: 'integer', unsigned: true })
  produtoId: number;

  /* Arrumar */
  @OneToOne(
    () => IngredienteRemovivel,
    (ingrediente_removivel) => ingrediente_removivel.ingrediente,
  )
  ingrediente_removivel: IngredienteRemovivel;

  /* Arrumar */
  @OneToOne(
    () => IngredienteOpcional,
    (ingrediente_opcional) => ingrediente_opcional.ingrediente,
  )
  ingrediente_opcional: IngredienteOpcional;
}
