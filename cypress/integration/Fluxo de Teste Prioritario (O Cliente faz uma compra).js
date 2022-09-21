/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'
import Factory from '../fixtures/factory'

describe('z Fluxo de Teste Prioritário - Cliente', () => {

  it('Cadastrar novo cliente e fazer login do mesmo', () =>{
    let usuario = Factory.gerarUsuario();
    Serverest.cadastrarUsuarioComSucesso(usuario).then(res => {
        cy.contractValidation(res, 'post-usuarios', 201)
        expect(res.status).to.be.equal(201)
        Cypress.env('novoUsuarioCadastrado', res.body._id )
    })

    let usuarioLogin = {
        "email": usuario.email,
        "password": usuario.password
    }

    Serverest.logar(usuarioLogin).then( res => {
        ValidaServerest.validarLoginComSucesso(res);
        Serverest.salvarBearer(res);   
    })
  })

  it('Cadastrar novo produto e adiciona-lo ao carrinho', () => {
    Serverest.cadastrarProdutoComSucesso().then(res => {
        ValidaServerest.validarCadastroDeProdutoComSucesso(res)
    })
    
        cy.fixture('produto.json').then(arquivo => {
            let novoProduto = {                        
                "produtos": [{
                    "idProduto": arquivo._id,
                    "quantidade": 1
                }]
            }
            Serverest.cadastrarCarrinhoComSucesso(novoProduto).then(res => {  
                cy.contractValidation(res, 'post-carrinhos', 201);
                ValidaServerest.validarCadastrarCarrinhoComSucesso(res);           
            })                                                          
        })
    })

    it('Finalizar a compra e deletar o carrinho', () => {
        Serverest.finalizarCompraComSucesso().then(res => {
            ValidaServerest.validarFinalizarCompraComSucesso(res)
        })
    })

})