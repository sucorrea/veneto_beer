import express from "express";

import Usuarios from "./routes/usuarios";
import Produtos from "./routes/produtos";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(Usuarios);
app.use(Produtos);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
