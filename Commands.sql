-- Database: registro_ponto

-- DROP DATABASE IF EXISTS registro_ponto;

CREATE DATABASE registro_ponto
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

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

INSERT INTO usuarios (nome, email, cpf, senha, data_nascimento)
VALUES ('Pietro Fiori', 'pietro@gmail.com', '123.456.789-00', 'root', '2003-11-08');


INSERT INTO usuarios (nome, email, cpf, senha, data_nascimento)
VALUES ('Gabriel Sabadin', 'gabriel@icloud.com', '987.654.321-00', 'admin', '2002-09-19');



SELECT * FROM usuarios


INSERT INTO registro_pontos (usuario_id, data_entrada, data_intervalo, data_fim_intervalo, data_saida)
VALUES (
    (SELECT id FROM usuarios WHERE nome = 'Gabriel Sabadin'), 
    '2024-04-30 09:00:00', 
    '2024-04-30 12:00:00',
    '2024-04-30 13:00:00',
    '2024-04-30 18:00:00'
);

SELECT data_entrada, data_intervalo, data_fim_intervalo, data_saida
FROM registro_pontos
WHERE usuario_id = (SELECT id FROM usuarios WHERE nome = 'Gabriel Sabadin');


SELECT * FROM usuarios



SELECT data_entrada, data_intervalo, data_fim_intervalo, data_saida
FROM registro_pontos
WHERE usuario_id = (SELECT id FROM usuarios WHERE nome = 'Professor');
