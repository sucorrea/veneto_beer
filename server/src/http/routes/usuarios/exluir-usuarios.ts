import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.delete("/usuarios/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Usuário não encontrado");
    }

    res.status(200).send(`Usuário com ID ${id} excluído com sucesso.`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao excluir usuário do banco de dados");
  }
});

export default router;
