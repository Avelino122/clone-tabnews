const express = require("express");
const bodyParser = require("body-parser");
const db = require("./firebase/");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/submit", async (req, res) => {
  const { nome, email } = req.body;

  try {
    const docRef = await db.collection("usuarios").add({
      nome,
      email,
      timestamp: new Date(),
    });
    console.log("Documento adicionado com ID: ", docRef.id);
    res.status(200).json({
      message: `Documento adicionado com sucesso com ID: ${docRef.id}`,
    });
  } catch (error) {
    console.error("Erro ao adicionar documento: ", error);
    res.status(500).json({ error: "Erro ao processar sua solicitação" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
