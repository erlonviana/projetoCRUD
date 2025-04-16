import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    const pedido = [
        { id: "1", produto: "Notebook" },
        { id: "1", produto: "Mouse Gamer" },
        { id: "2", produto: "Ipad"},
        { id: "3", produto: "PC"},
        { id: "4", produto: "Smartwatch"}
    ]
    res.render("pedido", { pedido })
})

export default router