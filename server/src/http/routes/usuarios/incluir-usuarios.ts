import { Router, Request, Response } from "express";
const db = require("../../../../db");

const router = Router();

router.post("/usuarios", async (req: Request, res: Response) => {
  const { nome, email, senha, eh_admin } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO usuarios (nome, email, senha, eh_admin) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome, email, senha, eh_admin || false]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao inserir usuário no banco de dados");
  }
});

export default router;
