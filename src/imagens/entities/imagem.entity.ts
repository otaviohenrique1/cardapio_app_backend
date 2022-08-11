import { Produto } from 'src/produtos/entities/produto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('imagem')
export class Imagem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Produto, (produto) => produto.imagens)
  @JoinColumn({ name: 'produtoId' })
  produto: Produto;

  @Column({ type: 'integer', unsigned: true })
  produtoId: number;
}
