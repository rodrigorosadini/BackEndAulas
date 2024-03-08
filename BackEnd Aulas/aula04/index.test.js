const app = require("./index")
const supertest = require('supertest')

const request = supertest(app)

test("deve retornar 200 no GET", async ()=> {
    const response = await request.get('/')
    expect(response.status).toBe(200)
})