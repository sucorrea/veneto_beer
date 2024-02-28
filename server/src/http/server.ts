import cors from "cors";
import express from "express";

import Estoque from "./routes/movimentacao-estoque/movimentacao_estoque";
import AlterarEstoque from "./routes/movimentacao-estoque/alterar-movimentacao_estoque";
import ExcluirEstoque from "./routes/movimentacao-estoque/excluir-movimentacao_estoque";
import IncluirEstoque from "./routes/movimentacao-estoque/incluir-movimentacao_estoque";
import AlterarProduto from "./routes/produtos/alterar-produto";
import ExcluirProduto from "./routes/produtos/excluir-produto";
import IncluirProduto from "./routes/produtos/incluir-produto";
import TiposCerveja from "./routes/produtos/tipos-cerveja";
import Produtos from "./routes/produtos/produtos";
import AlterarUsuario from "./routes/usuarios/alterar-usuarios";
import ExcluirUsuario from "./routes/usuarios/exluir-usuarios";
import IncluirUsuario from "./routes/usuarios/incluir-usuarios";
import Usuarios from "./routes/usuarios/usuarios";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

/*Usuários*/
app.use(Usuarios);
app.use(IncluirUsuario);
app.use(AlterarUsuario);
app.use(ExcluirUsuario);

/*Produtos*/
app.use(TiposCerveja);
app.use(IncluirProduto);
app.use(AlterarProduto);
app.use(ExcluirProduto);
app.use(Produtos);

/*Estoque*/
app.use(Estoque);
app.use(IncluirEstoque);
app.use(AlterarEstoque);
app.use(ExcluirEstoque);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
