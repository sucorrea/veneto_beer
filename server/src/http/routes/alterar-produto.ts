import { Router, Request, Response } from "express";
const db = require("../../../db");

const router = Router();

router.patch("/produtos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
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

  const fields = [];
  const values = [];

  if (dt_criacao) {
    fields.push("dt_criacao");
    values.push(dt_criacao);
  }
  if (dt_validade) {
    fields.push("dt_validade");
    values.push(dt_validade);
  }
  if (nm_produto) {
    fields.push("nm_produto");
    values.push(nm_produto);
  }
  if (vl_produto) {
    fields.push("vl_produto");
    values.push(vl_produto);
  }
  if (tipo_cerveja) {
    fields.push("tipo_cerveja");
    values.push(tipo_cerveja);
  }
  if (teor_alcoolico) {
    fields.push("teor_alcoolico");
    values.push(teor_alcoolico);
  }
  if (volume_ml) {
    fields.push("volume_ml");
    values.push(volume_ml);
  }
  if (descricao) {
    fields.push("descricao");
    values.push(descricao);
  }

  if (fields.length === 0) {
    return res.status(400).send("Nenhum dado fornecido para atualização.");
  }

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");
  values.push(id);

  try {
    const query = `UPDATE produtos SET ${setClause} WHERE id_produto = $${values.length} RETURNING *`;
    const result = await db.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).send("Produto não encontrada.");
    }

    return res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar o produto no banco de dados.");
  }
});

export default router;
