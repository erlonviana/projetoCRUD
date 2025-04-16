//Importando o pacote do Express.js
//const express = require("express"); -> forma antiga

//Modo ES6 de importação:
import express from "express"

//Carregando o método principal do Express
const app = express() //Iniciando o Express

//Importando os controllers (onde estão as rotas)
import produtoscontroller from "./controllers/produtoscontroller.js";
import clientecontroller from "./controllers/clientecontroller.js";
import pedidocontroller from "./controllers/pedidocontroller.js";

//CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine','ejs')

//CONFIGURANDO A PASTA PUBLIC PARA ARQUIVOS ESTATICOS
app.use(express.static('public'))

//Criando a rota principal (raiz) do site
//Método .get cria uma rota dentro da aplicação
//REQ trata a requisição do usuário e RES trata a resposta
app.get("/", (req,res) => {
    res.render("index");
});

//Configurando o Express para utilizar as rotas dos Controllers
app.use("/", produtoscontroller);
app.use("/cliente", clientecontroller);
app.use("/pedidos", pedidocontroller);

// Iniciando o servidor da aplicação (dentro da própria aplicação) na Porta 8080
//O método listen do Express inicia um servidor
app.listen(8081, function(error){
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor" + error)
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})