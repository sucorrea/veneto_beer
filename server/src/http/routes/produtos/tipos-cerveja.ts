import { Router, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.get("/tipos-cerveja", async (_, res: Response) => {
  const { rows } = await db.query(
    "SELECT id_tipo_cerveja, nome_tipo_cerveja, descricao_tipo_cerveja FROM tipos_cerveja"
  );
  res.json(rows);
});

export default router;
