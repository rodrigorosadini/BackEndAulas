const app = require('./index')
const supertest = require('supertest')

const request = supertest(app)

test("deve retornar 200 no GET", async ()=> {
    const response = await request.get('/')
    expect(response.status).toBe(200)
})

test("deve retornar 201 no POST", async ()=> {
    const response = await request.post('/')
    expect(response.status).toBe(201)
})

test("deve retornar 200 no PUT", async ()=> {
    const response = await request.put('/')
    expect(response.status).toBe(200)
})

test("deve retornar 204 no DELETE", async ()=> {
    const response = await request.delete('/')
    expect(response.status).toBe(204)
})