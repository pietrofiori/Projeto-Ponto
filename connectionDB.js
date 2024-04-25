const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'registro_ponto',
  password: 'admin',
  port: 5432,
});

module.exports = pool;

async function testarConexao() {
    try {
      const result = await pool.query('SELECT NOW()');
      console.log('Conexão com o banco de dados estabelecida com sucesso. Resultado:', result.rows[0].now);
    } catch (error) {
      console.error('Erro ao testar a conexão com o banco de dados:', error);
    }
//} finally {
    //   //await pool.end(); isso encerra a conexão com o banco , deixar comentado
    // }
}

testarConexao();