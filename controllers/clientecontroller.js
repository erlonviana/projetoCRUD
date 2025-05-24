import express from "express"
import Cliente from "../models/clientes.js"
const router = express.Router()

// router.get("/", (req, res) => {
//     const cliente = [
//         { id: "1", nome: "João Silva" },
//         { id: "2", nome: "Carlos Seabra" },
//         { id: "3", nome: "Luiz Viana" },
//         { id: "4", nome: "Maria Eulália Xavier" },
//         { id: "5", nome: "Lidiane Pires"}
//     ]
//     res.render("cliente", { cliente })
// })

router.get("/", function(req,res){ //não precisa colocar /cliente pois já está usando no index
    Cliente.findAll().then(clientes => {
        res.render("cliente", {
            clientes: clientes
        })
    })


})

//Rota de cadastro de clientes
router.post("/new", (req, res) => {
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.create({
        nome : nome,
        cpf : cpf,
        endereco : endereco
    }).then(() => {
        res.redirect("/cliente")
    })
})

//Rota de exclusão
router.get("/delete/:id", (req,res) => {
    const id = req.params.id
    Cliente.destroy({
        where: {
            id : id
        }
    }).then(() => {
        res.redirect("/cliente")
    })
})

//ROTA DE EDIÇÃO DE CLIENTES
router.get("/edit/:id", (req,res) => {
    const id = req.params.id
    Cliente.findByPk(id).then(function(cliente){
        res.render("clienteEdit",{
            cliente : cliente
        }             
        )
    })
})

//ROTA DE ALTERAÇÃO DE CLIENTES
router.post("/update/:id", (req,res) => {
    const id = req.body.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.update(
        {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        },
        {where: {id : id}}
    ).then(() => {
        res.redirect("/cliente")
    })
})

export default router

