/// <reference types="cypress" />

describe('Casos de teste sobre a rota /usuarios da API Serverest', () => {

  it('Deve buscar todos os usuarios cadastrados na Serverest', () => {
    cy.request('/usuarios').then(res => {
      expect(res).to.be.a('object')
      expect(res.body.quantidade).to.be.a('number')
      expect(res.body.quantidade).to.be.greaterThan(0)
    })
  })

  it('Nao deve postar um novo usuario administrador existente', () =>{
    cy.postarUsuarioSemSucesso().then (res => {
      expect(res).to.be.a('object')
      expect(res.body.message).to.be.a('string')
      expect(res.body.message).to.be.eq('Este email já está sendo usado')
    }) 
  })

  it('Deve validar o comando personalizado', () =>{
    cy.rest('GET', '/usuarios').then(res => {
      expect(res).to.be.a('object')
      cy.log(JSON.stringify(res))
    })
  })

  it.only('Deve realizar login com sucesso', () =>{
    cy.buscarUsuarioParaLogin().then(usuario => {
      cy.logar(usuario.email, usuario.senha).then(res =>{
        expect(res).to.be.a('object')
        expect(res.body.message).to.be.a('string')
        expect (res.body).to.haveOwnProperty('authorization')
        var bearer = res.body.authorization.slice(7)
        cy.log(bearer)
        // expect(res.body.message).to.be.eq('Login realizado com sucesso')
      })
    })
  })
})