import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.patch("/usuarios/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, senha, eh_admin } = req.body;

  try {
    const result = await db.query(
      "UPDATE usuarios SET nome = COALESCE($1, nome), email = COALESCE($2, email), senha = COALESCE($3, senha), eh_admin = COALESCE($4, eh_admin) WHERE id_usuario = $5 RETURNING *",
      [nome, email, senha, eh_admin, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Usuário não encontrado.");
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar usuário no banco de dados.");
  }
});

export default router;
