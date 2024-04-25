
const express = require('express');
const router = express.Router();
const pool = require('../connectionDB');

router.delete('/excluir/:ponto_id', async (req, res) => {
  const { ponto_id } = req.params;

  try {
    await pool.query('DELETE FROM registro_pontos WHERE id = $1', [ponto_id]);
    res.status(200).json({ message: 'Ponto excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir ponto:', error.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
