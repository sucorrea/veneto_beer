import { Router, Request, Response } from "express";
const db = require("../../../db");

const router = Router();

router.get("/usuarios", async (req: Request, res: Response) => {
  const { rows } = await db.query("SELECT * FROM usuarios");
  res.json(rows);
});

export default router;