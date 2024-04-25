
const express = require('express');
const router = express.Router();
const pool = require('../connectionDB');

router.post('/cadastrar', async (req, res) => {
  const { usuario_id, data_entrada, data_intervalo, data_fim_intervalo, data_saida } = req.body;

  try {
    await pool.query(
      'INSERT INTO registro_pontos (usuario_id, data_entrada, data_intervalo, data_fim_intervalo, data_saida) VALUES ($1, $2, $3, $4, $5)',
      [usuario_id, data_entrada, data_intervalo, data_fim_intervalo, data_saida]
    );
    res.status(201).json({ message: 'Ponto cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar ponto:', error.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
