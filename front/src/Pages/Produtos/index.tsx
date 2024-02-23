import { DataGrid } from "@mui/x-data-grid/DataGrid";

const Produtos = () => {
  return (
    <DataGrid
      autoHeight
      columns={[]}
      // getRowId={handleGetRowId}
      hideFooter
      rows={[]}
      checkboxSelection={false}
    />
  );
};

export default Produtos;
