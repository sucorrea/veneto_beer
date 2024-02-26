import express from "express";
import cors from "cors";

import AlterarProduto from "./routes/alterar-produto";
import ExcluirProduto from "./routes/excluir-produto";
import IncluirProduto from "./routes/incluir-produto";
import Usuarios from "./routes/usuarios";
import Produtos from "./routes/produtos";
import Estoque from "./routes/movimentacao_estoque";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

/*Usuários*/
app.use(Usuarios);

/*Produtos*/
app.use(IncluirProduto);
app.use(AlterarProduto);
app.use(ExcluirProduto);
app.use(Produtos);

/*Estoque*/
app.use(Estoque);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
