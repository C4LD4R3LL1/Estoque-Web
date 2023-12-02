const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const db = require('./db.js');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(db);
app.use(router);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../paginas", "login.html"));
});

app.get("/menu.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../paginas", "menu.html"));
});

app.get("/cadastro_funcionario.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../paginas", "cadastro_funcionario.html"));
});

app.get("/menu_vendas.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../paginas", "menu_vendas.html"));
});

app.get("/cadastro_produto.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../paginas", "cadastro_produto.html"));
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../paginas", "login.html"));
});

app.get('/imagem', (req, res) => {
    const imagePath = path.join(__dirname, "../paginas", "Sistema.png"); 
    res.sendFile(imagePath);
});

app.use(express.static("public"));

app.post("/cadastro_produto.html", async(req, res) => {
    const { nome, valorCompra, valorVenda, quantidade } = req.body;

    try {
        const novoProduto = await Produto.create({
            NOME: nome,
            VALOR_COMPRA: valorCompra,
            VALOR_VENDA: valorVenda,
            QUANTIDADE: quantidade
        });

        res.status(201).json({
            mensagem: 'Produto adicionado com sucesso',
            produto: novoProduto
        });
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);

        res.status(500).json({ erro: 'Erro interno do servidor.', detalhes: error.message });
    }
});

app.listen(3333, () => {
    console.log("Servidor pocando");
});