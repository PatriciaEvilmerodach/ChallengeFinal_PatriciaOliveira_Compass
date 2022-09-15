import Factory from '../fixtures/factory'

const URL_USUARIOS  = '/usuarios'
const URL_LOGIN     = '/login'
const URL_PRODUTOS  = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {
    // Ações que podemos realizar na API

    static buscarUsuarios(){
        return cy.request('GET', URL_USUARIOS)
    }

    static buscarUsuarioParaLogin(){
        cy.request(URL_USUARIOS).then(res => {
            cy.wrap({
                email: res.body.usuarios[0].email,
                password: res.body.usuarios[0].password
            }).as('usuarioLogin')
        })
    }
    
    static logar(usuario) {
        return cy.rest('POST', URL_LOGIN, usuario)
    }

    static salvarBearer(resposta) {
        Cypress.env('bearer', resposta.body.authorization.slice(7))
    }

    // Produtos //

    static buscarProdutos() {
        return cy.request('GET', URL_PRODUTOS)
    }

    static cadastrarProdutoComSucesso () {
        let produto = Factory.gerarProduto()

        return cy.request({
            method: 'POST',
            url: URL_PRODUTOS,
            body: produto,
            failOnStatusCode: true,
            auth: {
                bearer: Cypress.env('bearer')
            }
        })
    }
}