import { OutUsuario } from "../../models/OutUsuario";
import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.get("/usuarios", async (req: Request, res: Response) => {
  const { rows }: { rows: OutUsuario } = await db.query(
    "SELECT * FROM usuarios"
  );
  res.json(rows);
});

export default router;
