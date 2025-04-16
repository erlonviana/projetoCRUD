import express from "express"

 //Carregando o método do express para gerenciamento de Rotas
const router = express.Router() //router é o objeto para criar as rotas

//Rota de produtos
router.get("/produtos/", (req,res) => { 
    //coletando o parametro da rota

//Array com lista de produtos
const produtos = [
    //array de objetos
    {nome: "Notebook Samsung", preco: 3200, categoria: "Computadores"},
    {nome: "Mouse Gamer TGT", preco: 100, categoria: "Periféricos"},
    {nome: "Ipad 10ª Geração", preco: 3300, categoria: "Tablets e Smartphones"},
    {nome: "PC Positivo", preco: 1700, categoria: "Computadores"},
    {nome: "Samsung Galaxy Watch7", preco: 1300, categoria: "Smartwatch"} 
];

    res.render("produtos", {
        //Enviando a variavel produto para a pagina
        produtos : produtos //enviando variáveis para a página
    });
});

//Exportando o módulo
export default router; //se for exportar mais de um objeto, utilizar chaves {}