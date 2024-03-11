const express = require('express')
const { compose } = require('superagent')

const app = express()


app.get('/', (req, res) => {
    console.log("Você fez uma requisição GET")
    res.status(200).end()
})

app.post('/', (req, res) => {
    console.log("Você fez uma requisição POST")
    res.status(201).end()
})

app.put('/', (req, res) =>{
    console.log("Você fez uma requisição PUT")
    res.status(200).end()
})

app.delete('/', (req, res) =>{
    console.log("Você fez uma requisição DELETE")
    res.status(204).end()
})

app.listen(3000, () => {
    console.log("Bem vindo")
})

module.exports = app;