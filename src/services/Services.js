//Importações:
const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  //Pegar todos os registros do modelo selecionado:
  async pegaTodosRegistros() {
    return dataSource[this.model].findAll();
  }

  //Pegar um registro do modelo selecionado:

  // async pegaUmRegistroPorId(id) {
  //   return dataSource[this.model].findByPk(id);
  // }

  //Criar registro do modelo selecionado:

  // async criaRegistro(dadosDoRegistro) {
  //   return dataSource[this.model].create(dadosDoRegistro);
  // }

  //Atualizar registros do modelo selecionado:
  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: {
          id: id,
        },
      }
    );
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  //Deletar um registro do modelo selecionado:

  // async excluiRegistro(id) {
  //   return dataSource[this.model].destroy({ where: { id: id } });
  // }
}

//Exportações:
module.exports = Services;
