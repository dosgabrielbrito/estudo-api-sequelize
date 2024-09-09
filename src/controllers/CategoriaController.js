//Importações:
const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaServices.js');

//Instância CategoriaServices:
const categoriaServices = new CategoriaServices();

//Controlador para "categoria":
class CategoriaController extends Controller {
  constructor() {
    super(categoriaServices);
  }
}

//Exportações:
module.exports = CategoriaController;
