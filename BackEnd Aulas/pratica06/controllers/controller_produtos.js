const produtos = []

function listarTodos(req, res) {
    res.json(produtos)
}

function buscarPeloId(req, res){
    const {produtoId} = req.params
    const encontrado = produtos.find(item => item.id == produtoId)

    if(encontrado){
        res.json(encontrado)
    } else{
        res.status(404).json({msg: 'Produto não encontrado'})
    }
}

function criarProduto(req, res){
    if(req.body.nome && req.body.preco){
        const novo = {
            id: produtos.length+1,
            nome: req.body.nome,
            preco: req.body.preco
        }
        produtos.push(novo)
        res.status(201).json(novo)
    } else{
        res.status(422).json({msg: "Nome e preço do produto são obrigatórios"})
    }
}

function controllerProdutos(req,res){


}

function atualizar(req, res){
    const {produtoId} = req.params
    const encontrado = produtos.find(item => item.id == produtoId)

    if(encontrado){
        const produtoAtualizado = {
            nome: req.body.nome,
            preco: req.body.preco
        }
        produtos[encontrado] = produtoAtualizado
        res.json(produtoAtualizado)
    } else{
        res.status(404).json({msg: "Produto não encontrado"})
    }
}

function remover(req,res){
    const {produtoId} = req.params
    const encontrado = produtos.findIndex(item => item.id == produtoId)

    if(encontrado >= 0){
        produtos.splice(encontrado,1)
        res.status(204).end()
    } else{
        res.status(404).json({msg: "Produto não encontrado"})
    }
}

module.exports = {listarTodos, buscarPeloId, criarProduto, controllerProdutos, atualizar, remover}
