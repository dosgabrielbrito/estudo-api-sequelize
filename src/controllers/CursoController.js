//Importações:
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

//Instância CursoServices:
const cursoServices = new CursoServices();

//Controlador para "curso":
class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }
}

//Exportações:
module.exports = CursoController;
