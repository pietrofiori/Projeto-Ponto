const jwt = require('jsonwebtoken');
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

    // geração do JWT
    const token = jwt.sign({ id: user.rows[0].id }, 'akira', { expiresIn: '1h' });
    res.status(200).json({ token, user: user.rows[0] });
    console.log("TOKEN " + token);
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});


module.exports = router;
