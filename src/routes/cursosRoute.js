//Importações:
const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

//Iniciar instâncias do router:
const cursoController = new CursoController();
const router = Router();

//Método GET/POST/PUT/DELETE para "cursos":
router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res));
router.post('/cursos', (req, res) => cursoController.criaNovo(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualiza(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.exclui(req, res));

//Exportações:
module.exports = router;
