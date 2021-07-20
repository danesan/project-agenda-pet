const pg = require('pg');

const conexao = new pg.Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'Leinad=29',
  database: 'project-agenda-pet'
});

module.exports = conexao;