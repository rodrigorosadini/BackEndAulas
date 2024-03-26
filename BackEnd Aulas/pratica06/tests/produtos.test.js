const supertest = require('supertest')
const app = require('../app')

const request = supertest(app)

test("Deve retornar 201 e um JSON no POST em /produtos", async function(){
    const response = await request.post("/produtos").send({nome: "uva", preco: 20.00})
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id', 1)
    expect(response.body).toHaveProperty('nome', "uva")
    expect(response.body).toHaveProperty('preco', 20.00)
    expect(response.headers['content-type']).toMatch(/json/);      

})

test("Deve retornar 200 com um conteudo JSON no GET e um array de objetos em /produtos", async function(){
    const response = await request.get('/produtos')
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.headers['content-type']).toMatch(/json/);      
})

test("Deve retornar 200 com um conteudo JSON no GET em /produtos/1 com id, nome e preço", async function(){
    const response = await request.get('/produtos/1')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id')
    expect(response.body).toHaveProperty('nome')
    expect(response.body).toHaveProperty('preco')
    expect(response.headers['content-type']).toMatch(/json/);      
})

test("Deve retornar 404 com um conteudo JSON no GET em /produtos/100 com mensagem de erro", async function(){
    const response = await request.get('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('msg', "Produto não encontrado")
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 422 sem JSON no POST em /produtos e um conteudo JSON com mensagem de erro", async function(){
    const response = await request.post('/produtos/')
    expect(response.status).toBe(422)
    expect(response.body).toHaveProperty('msg', 'Nome e preço do produto são obrigatórios')
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 200 com JSON {'nome': 'uva verde', 'preco': 18.00} no PUT em /produtos/1 e um conteudo JSON contendo id, nome e preços atualizados", async function(){
    const response = await request.put('/produtos/1').send({'nome': 'uva verde', 'preco': 18.00})
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('nome', 'uva verde')
    expect(response.body).toHaveProperty('preco', 18.00)
    expect(response.headers['content-type']).toMatch(/json/);

})

test("Deve retornar 404 no PUT em /produtos/100 e um conteudo JSON com mensagem de erro", async function(){
    const response = await request.put('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('msg', 'Produto não encontrado')
    expect(response.headers['content-type']).toMatch(/json/);

})

test("Deve retornar 204 no DELETE em /produtos/1 e sem conteudo", async function(){
    const response = await request.delete('/produtos/1')
    expect(response.status).toBe(204)
    expect(response.body).toEqual({})
})

test("Deve retornar 404 no DELETE em /produtos/100 e um conteudo JSON com mensagem de erro", async function(){
    const response = await request.delete('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('msg', "Produto não encontrado")
    expect(response.headers['content-type']).toMatch(/json/);
})