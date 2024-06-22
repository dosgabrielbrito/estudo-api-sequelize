//Importações:
const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

//Instância PessoaServices:
const pessoaServices = new PessoaServices();

//Controlador para "pessoas":
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }
}

//Exportações:
module.exports = PessoaController;
