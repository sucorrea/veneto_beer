import { Router, Request, Response } from "express";
const db = require("../../../db");

const router = Router();

router.post("/produtos", async (req: Request, res: Response) => {
  const {
    dt_criacao,
    dt_validade,
    nm_produto,
    vl_produto,
    tipo_cerveja,
    teor_alcoolico,
    volume_ml,
    descricao,
  } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO produtos (dt_criacao, dt_validade, nm_produto, vl_produto, tipo_cerveja, teor_alcoolico, volume_ml, descricao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        dt_criacao,
        dt_validade,
        nm_produto,
        vl_produto,
        tipo_cerveja,
        teor_alcoolico,
        volume_ml,
        descricao,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao inserir a cerveja no banco de dados");
  }
});
export default router;
