//Controlador Geral:
class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  //Método GET para leitura geral:
  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      //Erro
    }
  }

  //Método GET para leitura individual:

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(
        Number(id)
      );
      return res.status(200).json(umRegistro);
    } catch (erro) {
      // erro
    }
  }

  // Método POST para criação:

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(
        dadosParaCriacao
      );
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      // erro
    }
  }

  //Médoto PUT para atualização individual:
  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ mensagem: 'Registro não foi atualizado.' });
      }
      return res.status(400).json({ mensagem: 'Atualizado com sucesso.' });
    } catch (erro) {
      //Erro
    }
  }

  //Médoto DELETE para exclusão individual:

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

//Exportações:
module.exports = Controller;
