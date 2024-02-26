import { Router, Request, Response } from "express";

const db = require("../../../../db");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const router = Router();

const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Substitua pelo seu servidor SMTP
  port: 587,
  secure: false, // true para 465, false para outras portas
  auth: {
    user: "email@example.com", // seu e-mail
    pass: "senha", // sua senha
  },
});

router.post("/recuperar-senha", async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const usuarioResult = await db.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (usuarioResult.rows.length > 0) {
      const usuario = usuarioResult.rows[0];
      const token = crypto.randomBytes(20).toString("hex");

      // Aqui você deveria armazenar o token e sua validade no banco de dados

      const mailOptions = {
        from: "email@example.com",
        to: usuario.email,
        subject: "Recuperação de Senha",
        text: `Você solicitou a recuperação de senha. Use o seguinte token para redefinir sua senha: ${token}`,
        // Idealmente, você incluiria um link para uma página de redefinição de senha
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(500).send("Erro ao enviar e-mail");
        } else {
          console.log("Email enviado: " + info.response);
          res
            .status(200)
            .send("Instruções de recuperação de senha enviadas por e-mail.");
        }
      });
    } else {
      res.status(404).send("Usuário não encontrado.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao tentar recuperar a senha");
  }
});
