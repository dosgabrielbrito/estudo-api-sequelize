//Importações:
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

//Instância PessoaServices:
const matriculaServices = new MatriculaServices();

//Controlador para "matricula":
class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }
}

//Exportações:
module.exports = MatriculaController;
