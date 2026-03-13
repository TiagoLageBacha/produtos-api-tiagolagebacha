let produtos =[];
let nextId = 1;

// GET Listar Produtos
const listar = (req, res) =>{
    // to do IMPLEMENTAR LÓOGICA DE LISTAGEM
    res.status(200).json(produtos);
};

// Buscar por ID
const buscarPorId = (req, res) => {
    // to do implementar lógica de buscar por ID
};

// Criar novo produto
const criar =(req, res) => {
    // to do implementar lógica de criação
};

// Atualizar
const atualizar = (req, res) => {
    // to do Implementar logica de atualização
};

// Delete
const remover =(req,res) => {
    // to do Implementar logica de remover
};

// Module Exports
module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};