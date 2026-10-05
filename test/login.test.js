const request = require('supertest');
const { expect } = require('chai')

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/login')                                 //o endpoint que vamos chamar
                .set('Content-Type', 'application/json')       // o header da nossa operação
                .send({                                        // o body da nossa requisição     
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            console.log(resposta.status)
            console.log(resposta.body)

            expect(resposta.status).to.equal(200);            // para validar que o status code foi realmente 200
            expect(resposta.body.token).to.be.a('string');      //validar que o token é do tipo string
        })
    })
})