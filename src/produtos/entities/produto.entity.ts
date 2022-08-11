import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Imagem } from 'src/imagens/entities/imagem.entity';
import { IngredienteOpcional } from 'src/ingredientes-opcionais/entities/ingrediente-opcional.entity';
import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';
import { PedidoItem } from 'src/pedido-item/entities/pedido-item.entity';
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

  /* Arrumar */
  /* Ver se vai renomear de 'PedidoRefeicao' para 'PedidoItem' ou 'PedidoProduto' */
  @OneToOne(() => PedidoItem, (pedido_item) => pedido_item.refeicao)
  pedido_item: PedidoItem;

  /* 1 produto do pedido pode ter nenhum ou 1 ou mais opcionais */
  /* Ver se vai ser opcional */
  /* Ver se vai ser cadastrado no cadastro da refeicao */
  @OneToMany(() => IngredienteOpcional, (opcional) => opcional.produto, {
    cascade: ['insert', 'update', 'remove'],
  })
  lista_opcionais: IngredienteOpcional[];
}
