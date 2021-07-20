const Atendimento = require('../models/atendimento')

module.exports = app => {
  app.get('/atendimentos', (req, res) => res.send('Voce está na rota ATENDIMENTOS e usando o GET'));

  app.post('/atendimentos', (req, res) => {
    console.log('Atendimento enviado!');
    console.log(req.body);
    const atendimento = req.body;
    Atendimento.adiciona(atendimento);
    res.send('POST atendimento');
  });
}
