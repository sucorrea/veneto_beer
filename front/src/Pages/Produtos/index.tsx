import { useCallback } from "react";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { formatToDate } from "brazilian-values";
import { OutProduto } from "../../Api/ProdutosApiService/Models/OutProduto";
import AlterarProduto from "./AlterarProduto";
import ExcluirProduto from "./ExcluirProduto";
import { useProdutos } from "./useProdutos";

import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "id_produto",
    headerName: "Código",
    minWidth: 50,
    renderCell(params) {
      return String(params.value).padStart(3, "0");
    },
    flex: 1,
  },
  {
    field: "nm_produto",
    headerName: "Nome do Produto",
    minWidth: 200,
    flex: 1,
  },

  {
    field: "dt_validade",
    headerName: "Data de Validade",
    width: 150,
    renderCell(params) {
      return formatToDate(new Date(params.value));
    },
    flex: 1,
    minWidth: 150,
  },
  {
    field: "vl_produto",
    headerName: "Valor do Produto",
    width: 110,
    flex: 1,
    headerAlign: "right",
    align: "right",
  },
  {
    field: "nome_tipo_cerveja",
    headerName: "Tipo de Cerveja",
    width: 160,
    flex: 1,
  },
  {
    field: "teor_alcoolico",
    headerName: "% de Teor Alcoolico",
    width: 160,
    flex: 1,
    headerAlign: "right",
    align: "right",
  },
  {
    field: "volume_ml",
    headerName: "Volume (ml)",
    width: 160,
    flex: 1,
    headerAlign: "right",
    align: "right",
  },
  {
    field: "descricao",
    headerName: "Descrição",
    width: 160,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "alterar",
    headerName: "",
    width: 64,
    sortable: false,
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: ({ row: { id_produto } }) => (
      <>
        <AlterarProduto idProduto={id_produto} />
        <ExcluirProduto idProduto={id_produto} />
      </>
    ),
  },
];

const Produtos = () => {
  const { produtos, isLoading } = useProdutos();
  const handleGetRowId = useCallback((row: OutProduto) => row.id_produto, []);

  return (
    <Card sx={{ m: 2 }}>
      <CardHeader
        title="Produtos"
        action={
          <Button aria-label="settings" startIcon={<AddCircle />}>
            Novo Produto
          </Button>
        }
      />
      <CardContent>
        <DataGrid
          sx={{ border: 0 }}
          autoHeight
          columnHeaderHeight={40}
          rowHeight={40}
          columns={columns}
          getRowId={handleGetRowId}
          disableColumnMenu
          rows={produtos}
          checkboxSelection={false}
          loading={isLoading}
          pagination
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Produtos;
