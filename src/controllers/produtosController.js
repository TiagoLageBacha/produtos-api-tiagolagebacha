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
// POST /api/v1/produtos
const criar =(req, res) => {
    const{ nome, descricao, preco, categoria, estoque} = req.body;

    if(!nome || !descricao || !preco || !categoria || estoque === undefined){
        return res.status(400).json({
            erro: "Todos os campos obrigatórios devem ser preenchidos",
            campos_esperados: ["nome", "descricao", "preco", "categoria", "estoque"]
        });
    }

    const novoProduto ={
        id: nextId++,
        nome,
        descricao,
        preco,
        categoria,
        estoque,
        ativo: true,
        criado_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
    }

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
};

// Atualizar
// PUT /api/v1/produtos/:id
const atualizar = (req, res) => {
    const id = Number(req.params.id);
    const{nome, descricao, preco, categoria, estoque, ativo} = req.body;

    const index = produtos.findIndex(p => p.id === id);

    if(index === -1){
        return res.status(404).json({erro: "Produto não encontrado"});
    }

    produtos[index]={
        ...produtos[index],
        nome,
        descricao,
        preco,
        categoria,
        estoque,
        ativo,
        atualizado_em: new Date().toISOString
    };

    res.status(200).json(produtos[index]);
};

// Delete
//  /api/v1/produtos/:id
const remover =(req,res) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(p=>p.id ===id);

    if(index===-1){
        return res.status(404).json({erro:"Produto não encontrado"});
    }

    produtos.splice(index,1);

    res.status(204).send();
};

// Module Exports
module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};