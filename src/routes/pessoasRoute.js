//Importações:
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

//Iniciar instâncias do router:
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();
const router = Router();

//Métodos para "pessoas":
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) =>
  pessoaController.pegaUmPorId(req, res)
);
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

//Métodos para "matriculas":
router.get('/pessoas/:estudanteId/matriculas', (req, res) =>
  pessoaController.pegaMatriculas(req, res)
);

router.post('/pessoas/:estudanteId/matriculas', (req, res) =>
  matriculaController.criaNovo(req, res)
);

//Exportações:
module.exports = router;
