const request = require('supertest');
const urlAPi = "http://localhost:3000";

describe('Suite de teste de api - para validar consulta de produtos. (FLUXO SUCESSO', ()=>{
    it('CE01: consultado todos os produtos cadastros com sucesso. É esperado retorna 200', async ()=>{
            const resposta = await request(urlAPi).get('/products');
            expect(resposta.statusCode).toBe(200);
            console.log('O status da requisição retornou:',resposta.statusCode);
         });
    it('CE02: consultar todos os produto cadastrasdos com sucesso. Deve validar que for retornado um array de obejtos.', async ()=>{
        const resposta = await request(urlAPi).get('/products');
         expect(resposta.statusCode).toBe(200);
         //verificar se e  um array de objetos, {true} se e verdadeiro
         expect(Array.isArray(resposta.body)).toBe(true);
         console.log('O status da requisição retornou:',resposta.statusCode);
         console.log('A resposta da requisição retornou o seguinte body:', resposta.body);
    });    
    });