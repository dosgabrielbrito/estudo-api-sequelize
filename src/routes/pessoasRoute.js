//Importações:
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

//Iniciar instância do router:
const pessoaController = new PessoaController();
const router = Router();

//Método GET para "pessoas":
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));

//Exportações:
module.exports = router;
