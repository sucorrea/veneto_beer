import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.delete("/movimentacao-estoque/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM movimentacao_estoque WHERE id_movimentacao = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Movimentação não encontrada");
    }

   return res.status(200).send(`Movimentação com ID ${id} excluída com sucesso.`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao excluir movimentação do banco de dados");
  }
});


export default router;
