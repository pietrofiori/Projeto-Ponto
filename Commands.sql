CREATE DATABASE registro_ponto;

\c registro_ponto;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL
);

CREATE TABLE registro_pontos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    data_entrada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_intervalo TIMESTAMP,
    data_fim_intervalo TIMESTAMP,
    data_saida TIMESTAMP
);
