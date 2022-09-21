/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /carrinhos da API Serverest', () => {

    it('Deve buscar todos os carrinhos cadastrados', () => {
        Serverest.buscarCarrinhos().then(res => {
            ValidaServerest.validarBuscaDeCarrinhos(res)
        })
    })

    context('Logar com sucesso', () => {
    beforeEach('Logar', () => {
        Serverest.buscarUsuarioParaLogin()
        cy.get('@usuarioLogin').then(usuario => {
            Serverest.logar(usuario).then(res => {
                ValidaServerest.validarLoginComSucesso(res)
                Serverest.salvarBearer(res)
            })
        })
    })

        it('Deve cancelar uma compra e excluir o carrinho', () => {
            Serverest.cancelarCompraComSucesso().then(res => {
                cy.contractValidation(res, 'delete-carrinhos', 200);
                ValidaServerest.validaCancelarCompraComSucesso(res);
            })
        })
    })
})