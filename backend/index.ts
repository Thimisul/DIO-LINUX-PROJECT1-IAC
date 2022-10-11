import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
var cors = require('cors')

type loginType = {
  username: String,
  password: String
}

const app = express();
app.use(cors())

const pool =  mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: '123456',
  database: 'TEST_LOGIN'
});

app.use(bodyParser.json());

app.post('/cadastro', function(req, res) {
  var {username, password} = req.body
  pool.promise().query('INSERT INTO users (username, password) VALUES(?,?)', [username, password])
  .then(()=>{
    res.status(201)
  })
  .catch(()=>{
    res.status(500)
  })
});

app.post('/login', async function(req, res) {
  console.log(req.body)
  var {username, password} = req.body
  const [rows, fields] = await pool.promise().query( 'SELECT * FROM users WHERE username = ? and password = ?', [username, password], )
    console.log(rows)
    if(rows.toString().length > 0){
      res.status(200)
    }else{
      res.status(404);
    }
  }
);

app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');
});