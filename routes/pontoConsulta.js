
const express = require('express');
const router = express.Router();
const pool = require('../connectionDB');

router.get('/consultar/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const pontos = await pool.query('SELECT * FROM registro_pontos WHERE usuario_id = $1', [usuario_id]);
    res.status(200).json(pontos.rows);
  } catch (error) {
    console.error('Erro ao consultar pontos:', error.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
