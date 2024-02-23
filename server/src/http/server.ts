import express from "express";
import cors from "cors";

import Usuarios from "./routes/usuarios";
import Produtos from "./routes/produtos";
import Estoque from "./routes/movimentacao_estoque";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(Usuarios);
app.use(Produtos);
app.use(Estoque);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
