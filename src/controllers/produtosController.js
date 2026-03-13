let produtos =[];
let nextId = 1;

// GET Listar Produtos /api/v1/produtos
const listar = (req, res) =>{
    res.status(200).json(produtos);
};

// GET Buscar por ID api/v1/produtos/:id
const buscarPorId = (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p=>p.id === id);

     if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    res.status(200).json(produto);
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