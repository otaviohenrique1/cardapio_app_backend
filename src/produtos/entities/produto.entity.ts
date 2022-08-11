import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Imagem } from 'src/imagens/entities/imagem.entity';
import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  Generated,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('produto')
export class Produto {
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
  preco: number;

  @Column()
  descricao: string;

  /* ativo => status_produto ou situacao_produto */
  @Column()
  ativo: boolean; // 'ativo' => true, 'inativo' => false
  // ativo: string; // ('ativo', 'inativo', 'rejeitado', 'testes'), caso seja do tipo string

  @Column()
  quantidade_estoque: number;

  @Column()
  unidade_quantidade_estoque: string; // unidade, ml, l, mg, g, kg

  @Column()
  quantidade_embalagem: number;

  @Column()
  unidade_quantidade_embalagem: string; // unidade, ml, l, mg, g, kg

  @Column()
  tipo_produto: string; // ('comida' e 'bebida')

  /* 1 refeicao com 1 ou mais imagens */
  @OneToMany(() => Imagem, (imagem) => imagem.produto, {
    cascade: ['insert', 'update', 'remove'],
  })
  imagens: Imagem[];

  /* 1 refeicao com 1 ou mais ingredientes */
  /* Ver se vai ser opcional */
  @OneToMany(() => Ingrediente, (ingrediente) => ingrediente.produto, {
    cascade: ['insert', 'update', 'remove'],
  })
  ingredientes: Ingrediente[];

  /* muitas refeicoes cadastradas por 1 usuario  */
  @ManyToOne(() => Empresa, (empresa) => empresa.produtos)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @Column({ type: 'integer', unsigned: true })
  empresaId: number;
}
