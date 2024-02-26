import { useCallback } from "react";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { formatToDate } from "brazilian-values";
import { OutProduto } from "../../Api/ProdutosApiService/Models/OutProduto";
import AlterarProduto from "./AlterarProduto";
import ExcluirProduto from "./ExcluirProduto";
import { useProdutos } from "./useProdutos";

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
    renderCell(params) {
      return formatToDate(new Date(params.value));
    },
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
    flex: 1,
  },
  {
    field: "alterar",
    headerName: "",
    width: 32,
    renderCell: () => <AlterarProduto />,
  },
  {
    field: "excluir",
    headerName: "",
    width: 32,
    renderCell: ({ row: { id_produto } }) => (
      <ExcluirProduto idProduto={id_produto} />
    ),
  },
];

const Produtos = () => {
  const { produtos, isLoading } = useProdutos();
  const handleGetRowId = useCallback((row: OutProduto) => row.id_produto, []);

  return (
    <DataGrid
      autoHeight
      columns={columns}
      getRowId={handleGetRowId}
      hideFooter
      rows={produtos}
      checkboxSelection={false}
      loading={isLoading}
    />
  );
};

export default Produtos;
