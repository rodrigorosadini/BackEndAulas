const express = require('express')

const app = express()

const routerProdutos = require("./router.js")

app.use(express.json())
app.use(routerProdutos)

app.listen(3000, () => {
    console.log("API ON")
})

module.exports = app