//Importações:
const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

//Instância PessoaServices:
const pessoaServices = new PessoaServices();

//Controlador para "pessoa":
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }
}

//Exportações:
module.exports = PessoaController;
