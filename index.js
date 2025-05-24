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

//Permitindo dados vindo de formularios
app.use(express.urlencoded({extended: false }))
app.use(express.json())



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

import connection from "./config/sequelize-config.js";

connection.authenticate().then(() =>{
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error)=> {
    console.log(error)
})

//Criando banco de dados
connection.query(`CREATE DATABASE IF NOT EXISTS
    loja;`).then(() => {
        console.log("O banco de dados está criado.")
    }).catch((error) => {
        console.log(error)
    })


    import Cliente from "./models/clientes.js"



    
    