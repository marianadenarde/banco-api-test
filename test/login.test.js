const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const postLogin = require('../fixture/postLogin.json')

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
            const bodyLogin = {...postLogin}

            const resposta = await request(process.env.BASE_URL)
                .post('/login')                                 //o endpoint que vamos chamar
                .set('Content-Type', 'application/json')       // o header da nossa operação
                .send(bodyLogin)
            
            expect(resposta.status).to.equal(200);            // para validar que o status code foi realmente 200
            expect(resposta.body.token).to.be.a('string');      //validar que o token é do tipo string
        })
    })
})