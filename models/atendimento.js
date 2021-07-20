const db = require('../infraestructure/conexao');


class Atendimentos {

  adiciona(atendimento) {
    //db.connect(erro => {
    //  if (erro) {
    //    console.log(erro);
    //  } else {
        const sql = 'INSERT INTO agendapetshop.atendimentos(cliente, pet, servico, status, observacoes) VALUES ($1, $2, $3, $4, $5);';
        //const sql = 'INSERT INTO agendapetshop.atendimentos SET ?';
        //console.log(Array.of(atendimento));
        db.query(sql, [atendimento.cliente, atendimento.pet, atendimento.servico, atendimento.status, atendimento.observacoes], (erro, resultados) => {
          if (erro) {
            console.log(erro);
          } else {
            console.log(resultados)
          }
        });

      //  db.end();
      //}
   // });
  }
}

module.exports = new Atendimentos();