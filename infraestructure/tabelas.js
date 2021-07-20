class Tabelas {

  init(db) {
    this.db = db;
    console.log('Tabelas foram chamadas!');
    this.criarAtendimentos();
  }

  async criarAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS agendapetshop.atendimentos(id SERIAL NOT NULL, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id));';
    
    await this.db.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log('Tabelas atendimentos criada com sucesso!')
      }
    });
  };
}

module.exports = new Tabelas();