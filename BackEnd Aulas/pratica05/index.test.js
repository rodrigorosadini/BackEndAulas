const supertest = require('supertest')

const app = require('./index')

const request = supertest(app)

test("Deve retornar 200 no GET e um conteudo JSON em /produtos", async function(){
    const response = await request.get('/produtos')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 200 no GET e um conteudo JSON em /produtos/1", async function(){
    const response = await request.get('/produtos/1')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 404 no GET e um conteudo JSON em /produtos/100", async function(){
    const response = await request.get('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 201 no POST e um conteudo JSON em /produtos", async function(){
    const response = await request.post('/produtos').send({nome: "uva", preco: 20.00})
    expect(response.status).toBe(201)
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 422 no POST e sem conteudo JSON em /produtos", async function(){
    const response = await request.post('/produtos')
    expect(response.status).toBe(422)
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 200 no PUT e um conteudo JSON em /produtos/1", async function(){
    const response = await request.put('/produtos/1').send({nome: "uva verde", preco: 18.00})
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 404 no PUT e um conteudo JSON em /produtos/100", async function(){
    const response = await request.put('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 204 no DELETE e sem conteudo em /produtos/1", async function(){
    const response = await request.delete('/produtos/1')
    expect(response.status).toBe(204)
    expect(response.body).toEqual({})
})

test("Deve retornar 404 no DELETE e um conteudo JSON em /produtos/100", async function(){
    const response = await request.delete('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.headers['content-type']).toMatch(/json/);
})
