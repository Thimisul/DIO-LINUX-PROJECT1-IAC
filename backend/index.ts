import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
var cors = require("cors");

type loginType = {
  username: String;
  password: String;
};

const app = express();
app.use(cors());

const pool = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "123456",
  database: "LOGIN_TEST",
});

app.use(bodyParser.json());

app.post("/cadastro", function (req, res) {
  var { username, password } = req.body;
  pool
    .promise()
    .query("INSERT INTO users (username, password) VALUES(?,?)", [
      username,
      password,
    ])
    .then(() => {
      res
        .status(201)
        .send(JSON.stringify({ messgae: "Cadastro realizado com sucesso, Faça o login novamente" }));
    })
    .catch(() => {
      res
        .status(500)
        .send(JSON.stringify({ error: "Cadastro não realizado" }));
    });
});

app.post("/login", async function (req, res) {
  console.log(req.body);
  var { username, password } = req.body;
  const [rows, fields] = await pool
    .promise()
    .query("SELECT * FROM users WHERE username = ? and password = ?", [
      username,
      password,
    ]);
  console.log(rows);
  if (rows.toString().length > 0) {
    res
      .status(200)
      .send(JSON.stringify({ message: "Login realizado com sucesso"}));
  } else {
    res
      .status(404)
      .send(JSON.stringify({ error: "Login não encontrado, realizando o cadastro!" }));
  }
});

app.listen(8000, function () {
  console.log("Servidor rodando na porta 8000.");
});
