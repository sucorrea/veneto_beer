export type AlterarProdutoFormValues = {
  idProduto: number;
  dtCriacao: string;
  dtValidade?: Date;
  nmProduto: string;
  vlProduto: number;
  tipoCerveja?: string;
  teorAlcoolico?: number;
  volumeMl?: number;
  descricao?: string;
};
