
const express = require('express');
const router = express.Router();
const pool = require('../connectionDB');

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND senha = $2', [email, senha]);
    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
