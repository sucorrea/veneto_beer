import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.post("/movimentacao-estoque", async (req: Request, res: Response) => {
  const { id_produto, quantidade, tipo_movimentacao, descricao } = req.body;
  const data_movimentacao = new Date();

  try {
    const result = await db.query(
      "INSERT INTO movimentacao_estoque (id_produto, quantidade, tipo_movimentacao, data_movimentacao, descricao) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id_produto, quantidade, tipo_movimentacao, data_movimentacao, descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao inserir movimentação no banco de dados");
  }
});

export default router;
