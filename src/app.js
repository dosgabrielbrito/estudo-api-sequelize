//Importações:
const express = require('express');
const routes = require('./routes');

//Iniciar Express:
const app = express();
routes(app);

module.exports = app;
