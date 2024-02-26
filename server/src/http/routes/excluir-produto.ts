import { Router, Request, Response } from "express";
const db = require("../../../db");

const router = Router();

router.delete("/produtos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM produtos WHERE id_produto = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Produto não encontrado");
    }

    return res.status(200).send(`Produto com ID ${id} excluído com sucesso.`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao excluir a produto do banco de dados");
  }
});
export default router;
