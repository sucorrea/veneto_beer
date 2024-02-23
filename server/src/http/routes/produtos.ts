import { Router, Request, Response } from "express";
const db = require("../../../db");

const router = Router();

router.get("/produtos", async (req: Request, res: Response) => {
  const { rows } = await db.query("SELECT * FROM produtos");
  res.json(rows);
});

export default router;
