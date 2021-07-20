const express = require('express');
const consign = require('consign');
const bodyParser = require('bodyParser');


module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extend: true }));
  app.use(bodyParser.json());

  consign()
    .include('controllers')
    .into(app);
  
  bodyParser()
  
  return app;
}
