/// <reference types="cypress" />

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('login/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get(':nth-child(3) > .login-inputs').type('gabimattesco@gmail.com')
        cy.get('.mt_10 > .login-inputs').type('Mattesco87')
        cy.get('.btn').click()

        cy.get('.mb_0 > b').should('contain' , 'Olá, Gabriela Mattesco')
        cy.get('.mt_0').should('contain' , 'Qual ferramenta deseja utilizar hoje?')
           
    });

    it('Deve exibir uma mensagem de erro ao inserir e-mail inválido', () => {
        cy.get(':nth-child(3) > .login-inputs').type('gabi@gmail.com')
        cy.get('.mt_10 > .login-inputs').type('Mattesco87')
        cy.get('.btn').click()
        
        // cy.get('.toast-error > .toast-message').should('contain' , 'Senha ou E-mail incorreto.')
    });


    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get(':nth-child(3) > .login-inputs').type('gabimattesco@gmail.com')
        cy.get('.mt_10 > .login-inputs').type('Gabi87')
        cy.get('.btn').click()
        
        // cy.get('.toast-error > .toast-message').should('contain' , "Erro: A senha fornecida para o e-mail gabimattesco@gmail.com está incorreta. Perdeu a senha?")
    });

    it('Página - Esqueci minha senha', () => {
        cy.get('.forgotPassword > .forgotPass').click()
        cy.get('b').should('contain' , "Esqueci minha senha") 

        cy.get('.login-inputs').type('gabimattesco@gmail.com')
        cy.get('.btn').click()
        cy.get('.ng-trigger').should('contain' , "Você receberá instruções por e-mail")

    });

    it.only('Botão VOLTAR - página esqueci minha senha', () => {
        cy.get('.forgotPassword > .forgotPass').click()
        cy.get('b').should('contain' , "Esqueci minha senha")
        cy.get('a').click()
        cy.get('h4').should('contain', "Entrar")
        cy.get('p').should('contain', "Acesse com e-mail e senha")
        
    });

})