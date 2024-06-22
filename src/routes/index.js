//Importações:
const express = require('express');
const pessoas = require('./pessoasRoute.js');

//Exportação das Rotas:
module.exports = (app) => {
  app.use(express.json(), pessoas);
};
