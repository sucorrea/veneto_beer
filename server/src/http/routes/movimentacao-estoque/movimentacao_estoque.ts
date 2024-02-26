import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.get("/movimentacao-estoque", async (req: Request, res: Response) => {
  const { rows } = await db.query("SELECT * FROM movimentacao_estoque");
  res.json(rows);
});

export default router;
