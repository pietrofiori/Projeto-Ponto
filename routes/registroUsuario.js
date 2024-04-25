const express = require('express');
const router = express.Router();
const pool = require('../connectionDB'); 

router.post('/register', async (req, res) => {
    const { nome, email, cpf, senha, data_nascimento } = req.body;

    try {
        const newUser = await pool.query(
            'INSERT INTO usuarios (nome, email, cpf, senha, data_nascimento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nome, email, cpf, senha, data_nascimento]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err.message);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

module.exports = router;
