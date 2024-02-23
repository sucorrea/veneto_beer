export type MovimentacaoEstoque = {
  id_movimentacao: number;
  id_produto: number;
  quantidade: number;
  tipo_movimentacao: "entrada" | "saida";
  data_movimentacao: Date;
  descricao?: string;
};
