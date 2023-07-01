const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001; //a porta que o servidor irá ouvir

app.use(cors());


const connection = mysql.createConnection({
    host: 'localhost', // Altere para o endereço do seu servidor MySQL
    user: 'root', // Altere para o nome de usuário do seu banco de dados
    password: 'florist_db', // Altere para a senha do seu banco de dados
    database: 'products_db' // Altere para o nome do seu banco de dados
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
  });
  