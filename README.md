# Projeto - API

## Identificação

- Nome: Tiago Lage Bacha
- Matrícula: 2025008012456
- Projeto em Ciências de Dados II

## Descrição

Esta é uma API RESTful completa desenvolvida com Node.js e Express para o gerenciamento de um catálogo de produtos.

## Instruções de Execução

- É necessário ter o Node.js
- Deve-se instalar o o framefork: "npm install" e o Nodemon
- Execução padrão do servido utile npm start
- Servidor será iniciado na porta 3000.

## Endpoints da API

| Verbo  | Path                 | Descrição                       | Status esperado                |
| :----- | :------------------- | :------------------------------ | :----------------------------- |
| GET    | /api/v1/produtos     | Lista os produtos               | 200 OK                         |
| GET    | /api/v1/produtos/:id | Retorna o produto pelo ID       | 200 OK / 404 Not Found         |
| POST   | /api/v1/produtos     | Cria um produto                 | 201 Created / 400 Bad Request  |
| PUT    | /api/v1/produtos/:id | Atualiza por completo o produto | 200 OK / 404 Not Found         |
| DELETE | /api/v1/produtos/:id | Remove um produto               | 202 No content / 404 Not Found |
