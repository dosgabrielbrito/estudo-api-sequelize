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
}

//Exportações:
module.exports = Services;
