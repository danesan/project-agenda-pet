const customExpress = require('./config/customExpress');
const db = require('./infraestructure/conexao');
const tabela = require('./infraestructure/tabelas');

async function testeDB() {
  await db.connect(erro => {
    if (erro) {
      console.log(erro);
    } else {
      console.log('conectado com sucesso!');
      tabela.init(db);
      const app = customExpress();
      app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
  });
  await db.query('SELECT 1;');
  //await db.end(); 
}

testeDB();

