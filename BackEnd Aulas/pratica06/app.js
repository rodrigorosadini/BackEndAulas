var express = require('express');
var app = express();
const routerProdutos = require('./routes/produtos')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/produtos', routerProdutos)

module.exports = app;
