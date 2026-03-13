const express = require('express')
const produtosRouter = require('./routes/produtos');
const app = express()
const port = 3000

// Middleware para interpretar JSON
app.use(express.json());

// Middleware de Log:: Registra método, rota e timestamp de cada requisição
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// Registro de Rotas
app.use('/api/v1/produtos', produtosRouter);

// Middleware de erro global
app.use((err, req, res, next) => {
    res.status(500).json({erro: err.message});
});

app.listen(port, () => {
    console.log(`🚀 Bulbe API de Produtos rodando na porta ${port}`);
});