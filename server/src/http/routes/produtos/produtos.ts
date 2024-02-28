import { Router, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.get("/produtos", async (_, res: Response) => {
  const { rows } = await db.query(
    "SELECT p.id_produto,p.dt_validade,p.nm_produto,p.vl_produto,p.teor_alcoolico,p.volume_ml,p.descricao ,p.id_tipo_cerveja,tp.nome_tipo_cerveja,tp.descricao_tipo_cerveja FROM produtos as p INNER JOIN tipos_cerveja as tp ON p.id_tipo_cerveja = tp.id_tipo_cerveja"
  );
  res.json(rows);
});

router.post("/produtos", async (req, res) => {
  const {
    dt_criacao,
    dt_validade,
    nm_produto,
    vl_produto,
    id_tipo_cerveja,
    teor_alcoolico,
    volume_ml,
    descricao,
  } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO cervejas_artesanais (dt_criacao, dt_validade, nm_produto, vl_produto, id_tipo_cerveja, teor_alcoolico, volume_ml, descricao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        dt_criacao || new Date(),
        dt_validade,
        nm_produto,
        vl_produto,
        id_tipo_cerveja,
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
