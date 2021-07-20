module.exports = app => {
  app.get('/atendimentos', (req, res) => res.send('Voce está na rota ATENDIMENTOS e usando o GET'));
}
