const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const registerUser = require('./routes/registroUsuario')
const pontoCadastroRoutes = require('./routes/pontoCadastro');
const pontoConsultaRoutes = require('./routes/pontoConsulta');
const pontoExclusaoRoutes = require('./routes/pontoExclusao');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes)
app.use('/registroUsuario', registerUser)
app.use('/ponto', pontoCadastroRoutes);
app.use('/ponto', pontoConsultaRoutes);
app.use('/ponto', pontoExclusaoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
