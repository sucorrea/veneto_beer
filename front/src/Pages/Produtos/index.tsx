import { useCallback } from "react";
import { useQuery } from "react-query";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";

import { consultarProdutos } from "../../Api/ProdutosApiService";
import { OutProduto } from "../../Api/ProdutosApiService/Models/OutProduto";
import AlterarProduto from "./AlterarProduto";
import ExcluirProduto from "./ExcluirProduto";

const columns: GridColDef[] = [
  { field: "id_produto", headerName: "Código", width: 90 },
  {
    field: "nm_produto",
    headerName: "Nome do Produto",
    width: 150,
  },

  {
    field: "dt_validade",
    headerName: "Data de Validade",
    width: 150,
  },
  {
    field: "vl_produto",
    headerName: "Valor do Produto",
    type: "number",
    width: 110,
  },
  {
    field: "tipo_cerveja",
    headerName: "Tipo de Cerveja",
    width: 160,
  },
  {
    field: "teor_alcoolico",
    headerName: "% de Teor Alcoolico",
    width: 160,
  },
  {
    field: "volume_ml",
    headerName: "Volume (ml)",
    width: 160,
  },
  {
    field: "descricao",
    headerName: "Descrição",
    width: 160,
  },
  {
    field: "alterar",
    headerName: "",
    width: 160,
    renderCell: () => <AlterarProduto />,
  },
  {
    field: "excluir",
    headerName: "",
    width: 160,
    renderCell: () => <ExcluirProduto />,
  },
];

const Produtos = () => {
  const handleGetRowId = useCallback((row: OutProduto) => row.id_produto, []);

  const { data } = useQuery(["produtos"], () => consultarProdutos());

  return (
    <DataGrid
      autoHeight
      columns={columns}
      getRowId={handleGetRowId}
      hideFooter
      rows={data?.data || []}
      checkboxSelection={false}
    />
  );
};

export default Produtos;
