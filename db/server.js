const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do Pool do PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '2903',
  port: 5432,
  searchPath: ['react'], // Define o esquema padrão como 'react'
});

app.use(bodyParser.json()); // Para processar o corpo da requisição como JSON

// Endpoint para registrar usuário
app.post('/register', async (req, res) => {
  const { nome, cpf, email, dataNascimento, senha } = req.body;

  // Validação dos dados recebidos
  if (!nome || !cpf || !email || !dataNascimento || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Inserir dados no PostgreSQL
    const result = await pool.query(
      'INSERT INTO usuarios (nome, cpf, email, data_nascimento, senha) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [nome, cpf, email, dataNascimento, senha]
    );

    const userId = result.rows[0].id;
    res.status(201).json({ message: 'Usuário registrado com sucesso!', userId });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
});

// Endpoint de login
app.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(400).json({ error: 'CPF e senha são obrigatórios.' });
  }

  try {
    // Verificar se o CPF e a senha existem no banco
    const result = await pool.query(
      'SELECT * FROM react.usuarios WHERE cpf = $1 AND senha = $2',
      [cpf, senha]
    );

    if (result.rows.length > 0) {
      // Login bem-sucedido
      res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
      // Login falhou
      res.status(401).json({ message: 'CPF ou senha incorretos!' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
