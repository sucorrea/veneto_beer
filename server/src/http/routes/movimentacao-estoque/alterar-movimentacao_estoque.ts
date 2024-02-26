import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.patch("/movimentacao-estoque/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantidade, tipo_movimentacao, descricao } = req.body;

  try {
    const result = await db.query(
      "UPDATE movimentacao_estoque SET quantidade = COALESCE($1, quantidade), tipo_movimentacao = COALESCE($2, tipo_movimentacao), descricao = COALESCE($3, descricao) WHERE id_movimentacao = $4 RETURNING *",
      [quantidade, tipo_movimentacao, descricao, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Movimentação não encontrada.");
    }

   return res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar movimentação no banco de dados.");
  }
});

export default router;
