const express = require('express')

const router = express.Router()

const produtos = []

router.get('/produtos', (req, res) =>{
    res.json([])
})

router.get('/produtos/:produtoId', (req, res) => {
    if(req.params.produtoId == 100){
        res.status(404).send({})
        return
    }
    res.json({})
})

router.post('/produtos', (req, res) => {
    if(req.body && req.body.nome && req.body.preco){
        res.status(201).json({})
        return
    }

    res.status(422).send({})

})

router.put('/produtos/:produtoId', (req, res) => {
    if(req.params.produtoId == 100){
        res.status(404).send({})
        return
    }
    res.json({})
})

router.delete('/produtos/:produtoId', (req, res) => {
    if(req.params.produtoId == 100){
        res.status(404).send({})
        return
    }
        res.status(204).end()
})

module.exports = router;