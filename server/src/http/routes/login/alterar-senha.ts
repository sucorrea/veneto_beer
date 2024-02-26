import { Router, Request, Response } from "express";
const db = require("../../../../db");
const bcrypt = require("bcrypt");

const router = Router();

router.patch("/usuarios/:id/senha", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { senhaAtual, novaSenha } = req.body;

  try {
    const usuarioResult = await db.query(
      "SELECT * FROM usuarios WHERE id_usuario = $1",
      [id]
    );

    if (usuarioResult.rows.length > 0) {
      const usuario = usuarioResult.rows[0];

      const senhaValida = await bcrypt.compare(senhaAtual, usuario.senha);

      if (!senhaValida) {
        return res.status(401).send("Senha atual inválida.");
      }

      const novaSenhaCriptografada = await bcrypt.hash(novaSenha, 10);

      await db.query("UPDATE usuarios SET senha = $1 WHERE id_usuario = $2", [
        novaSenhaCriptografada,
        id,
      ]);

      return res.send("Senha atualizada com sucesso.");
    } else {
      return res.status(404).send("Usuário não encontrado.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao tentar alterar a senha");
  }
});

export default router;
