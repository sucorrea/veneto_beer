import { Router, Request, Response } from "express";
const db = require("../../../../db");
const bcrypt = require("bcrypt");

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    const result = await db.query("SELECT * FROM usuarios WHERE email = $1", [
      email,
    ]);

    if (result.rows.length > 0) {
      const usuario = result.rows[0];

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (senhaValida) {
        res.status(200).send(`Usuário ${usuario.nome} logado com sucesso.`);
      } else {
        res.status(401).send("Email ou senha inválidos.");
      }
    } else {
      res.status(404).send("Usuário não encontrado.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao tentar fazer login");
  }
});

export default router;
