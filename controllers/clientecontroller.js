import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    const cliente = [
        { id: "1", nome: "João Silva" },
        { id: "2", nome: "Carlos Seabra" },
        { id: "3", nome: "Luiz Viana" },
        { id: "4", nome: "Maria Eulália Xavier" },
        { id: "5", nome: "Lidiane Pires"}
    ]
    res.render("cliente", { cliente })
})

export default router