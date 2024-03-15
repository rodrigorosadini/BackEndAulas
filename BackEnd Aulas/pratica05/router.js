const express = require('express')

const router = express.Router()

const produtos = [{id: 1, nome: "maracuja", preco: 20.00}]


router.post('/produtos', (req, res) => {
    if(req.body && req.body.nome && req.body.preco){
        const novo = {
            id: produtos.length+1,
            nome: req.body.nome,
            preco: req.body.preco
        }
        produtos.push(novo)
        res.status(201).json(novo)
    }else {
        res.status(422).send({msg: "Nome e/ou preço do produto não informados"})
    }
})

router.get('/produtos', (req, res) => {
    res.json(produtos)
})

router.get("/produtos/:produtoId", (req, res) => {
    const encontrado = produtos.find(produto => produto.id == req.params.produtoId)
    if(encontrado){
        res.status(200).send({})
    } else {
        res.status(404).send({msg: "Produto não encontrado"})
    }
})



router.put('/produtos/:produtosId', (req,res) => {
    const encontrado = produtos.find(produto => produto.id == req.params.produtosId)

    if(encontrado){
        const atualiza = {
            nome: req.body.nome,
            preco: req.body.preco
        }
        produtos.push(atualiza)
        res.json(atualiza)
    } else{
        res.status(404).send({msg: "Produto não encontrado"})
    }
})

router.delete('/produtos/:produtoId', (req, res) => {
    const encontrado = produtos.find(produto => produto.id == req.params.produtoId)

    if(encontrado){
        produtos.pop()
        res.status(204).end()
    } else{
        res.status(404).send({msg: "Produto não encontrado"})
    }

})


module.exports = router
