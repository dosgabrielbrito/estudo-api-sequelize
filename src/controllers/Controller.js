//Controlador Geral:
class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  //Médoto GET para Leitura:
  async pegaTodos(req, res) {
    try {
      const listadeRegistro = await this.entidadeService.pegaTodosRegistros();
      return res.status(200).json(listadeRegistro);
    } catch (erro) {
      //Erro
    }
  }
}

//Exportações:
module.exports = Controller;
