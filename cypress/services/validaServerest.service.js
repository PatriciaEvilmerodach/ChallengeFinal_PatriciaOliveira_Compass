

export default class ValidaServerest {
    // Validações das ações que podemos realizar na API

    static validarBuscaDeUsuarios(resposta) {
        expect(resposta.body.quantidade).to.be.greaterThan(1)
    }

    static validarLoginComSucesso(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body).to.haveOwnProperty('authorization')
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

    static validarCadastrarCarrinhoComSucesso(resposta){
        cy.log(resposta.body.message);
        expect(resposta.status).to.be.eq(201);
        expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso');
        
    }

    static validarFinalizarCompraComSucesso(resposta){
        expect(resposta.status).to.be.equal(200);
        expect(resposta.body.message).to.be.eq('Registro excluído com sucesso');
    }

    static validarBuscaDeCarrinhos(resposta){
        expect(resposta.status).to.be.eq(200);
        expect(resposta.body.quantidade).to.be.greaterThan(0);
    }

    static validaCancelarCompraComSucesso(resposta){
        expect(resposta.status).to.be.equal(200);
        expect(resposta.body.message).to.be.eq('Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário');
    }
}