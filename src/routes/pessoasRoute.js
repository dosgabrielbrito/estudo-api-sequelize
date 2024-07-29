//Importações:
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

//Iniciar instâncias do router:
const pessoaController = new PessoaController();
const router = Router();

//Método GET para "pessoas":
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
//router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
//router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));
// router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

//Exportações:
module.exports = router;
