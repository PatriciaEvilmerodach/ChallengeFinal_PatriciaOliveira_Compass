

export default class ValidaServerest {
    // Validações das ações que podemos realizar na API

    static validarBuscaDeUsuarios(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        expect(resposta.body.quantidade).to.be.greaterThan(3)
    }

    static validarLoginComSucesso(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect (resposta.body).to.haveOwnProperty('authorization')
    }

    static validarBuscaDeProdutos(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('nome')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('preco')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('descricao')
    }

    static validarCadastroDeProdutoComSucesso(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
        expect (resposta.body).to.haveOwnProperty('_id')
    }
}