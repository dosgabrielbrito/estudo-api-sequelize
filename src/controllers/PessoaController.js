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

  //Médotos exclusivos de PessoaController:
  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(
        Number(estudanteId)
      );
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      //erro
    }
  }
}

//Exportações:
module.exports = PessoaController;
