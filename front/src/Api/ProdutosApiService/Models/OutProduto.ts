export type OutProduto = {
  id_produto: number;
  dt_criacao: Date;
  dt_validade?: Date;
  nm_produto: string;
  vl_produto: number;
  tipo_cerveja?: string;
  teor_alcoolico?: number;
  volume_ml?: number;
  descricao?: string;
};
