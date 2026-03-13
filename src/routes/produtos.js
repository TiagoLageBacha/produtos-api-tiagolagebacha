// Importa framework Express
const express = require('express');
const router = express.Router();

// Importa o controller 
const ctrl = require('../controllers/produtosController');

// Mapeamento das Rotas

// ROTA Lista produtos cadastarados
router.get('/', ctrl.listar);
// ROTA Buscar por Id
router.get('/:id', ctrl.buscarPorId);
// ROTA Create
router.post('/', ctrl.criar);
// ROTA Update
router.put('/:id', ctrl.atualizar);
// ROTA remove
router.delete('/:id', ctrl.remover);

// Exportar para roteador
module.exports = router;
