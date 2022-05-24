/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('login/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let name = faker.name.firstName() + faker.name.lastName();
        let email = faker.internet.email();
        let phone = faker.phone.phoneNumber(10);
        let cpf = faker.random.number(11);
        let password = faker.random.password()

        cy.get('.mt_20 > .forgotPass').click()
        cy.get('.custom-select').click().select('Pessoa Física').get('PF').click()
        cy.get(':nth-child(5) > :nth-child(1) > .ng-untouched').type(name)
        cy.get(':nth-child(2) > .ng-untouched').type(email)
        cy.get(':nth-child(6) > .input-field > .ng-untouched').type(phone)
        cy.get(':nth-child(7) > .input-field > .ng-untouched').type(cpf)
        cy.get(':nth-child(8) > .input-field > .ng-untouched').type(password)
        cy.get('#user_password_confirmation').get(password)
        
    });


})






// it('Deve completar o pré cadastro com sucesso', () => {
//     let nomeFaker = faker.name.firstName()
//     let sobrenomeFaker = faker.name.lastName()
//     let emailFaker = faker.internet.email(nomeFaker)

//     cy.get('#reg_email').type(emailFaker)
//     cy.get('#reg_password').type('Gabi@@!')
//     cy.get(':nth-child(4) > .button').click() 
    
//     cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
//     cy.get('#account_first_name').type(nomeFaker)
//     cy.get('#account_last_name').type(sobrenomeFaker)
//     cy.get('.woocommerce-Button').click()

//     cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')  
    
    
// });

// it('Deve fazer login com sucesso' , () => {
//     cy.get('#username').type('gabimattesco@gmail.com')
//     cy.get('#password').type('G@b12022!')
//     cy.get('.woocommerce-form > .button').click()  
    
//     cy.get('.page-title').should('contain' , 'Minha conta')
//     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
// })

// it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
//     cy.get('#username').type('gabi@gmail.com')
//     cy.get('#password').type('G@b12022!')
//     cy.get('.woocommerce-form > .button').click()

//     cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')

// })

// it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
//     cy.get('#username').type('gabimattesco@gmail.com')
//     cy.get('#password').type('gab12022!')
//     cy.get('.woocommerce-form > .button').click()

//     cy.get('.woocommerce-error').should('contain' , "Erro: A senha fornecida para o e-mail gabimattesco@gmail.com está incorreta. Perdeu a senha?")
// })
