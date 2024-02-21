const express = require("express");
const db = require("./db");
const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM users");
  res.json(rows);
});

// O resto do código do servidor...
