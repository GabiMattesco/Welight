/// <reference types="cypress" />
var faker = require('faker');
var faker = require('faker-br');


describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('login/')
    });

    it('Deve completar o pré cadastro-PJ com sucesso', () => {
        cy.get('.mt_20 > .forgotPass').click()
        cy.get('.custom-select').select('Pessoa Jurídica')

        let name = faker.name.firstName() + (' ') + faker.name.lastName();
        let email = faker.internet.email(name);
        let phone = faker.phone.phoneNumber();
        let meuCnpj = faker.br.cnpj(); 
        let url = faker.internet.url();
        let streetAddress = faker.address.streetAddress();
               
        cy.get(':nth-child(5) > :nth-child(1) > .ng-untouched').type(name)
        cy.get(':nth-child(2) > .ng-untouched').type(email)
        cy.get(':nth-child(6) > .input-field > .ng-untouched').type(phone)
        cy.get(':nth-child(7) > .input-field > .ng-untouched').type(meuCnpj)
        cy.get(':nth-child(8) > .input-field > .ng-untouched').type(url)
        cy.get(':nth-child(9) > .input-field > .ng-untouched').type(streetAddress)
        cy.get(':nth-child(10) > .input-field > .ng-untouched').type('Senh@123')
        cy.get('#user_password_confirmation').type('Senh@123')
        cy.get('#termos-de-uso').click()
        cy.get('.row > :nth-child(14)').click()

        //     cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')  
        
    });

    it.only('Botão - FAZER LOGIN na página de cadastro PJ', () => {
        cy.get('.mt_20 > .forgotPass').click()
        cy.get('.custom-select').select('Pessoa Jurídica') 
        cy.get('.loginText').click()

        cy.get('h4').should('contain', "Entrar")
        cy.get('p').should('contain', "Acesse com e-mail e senha")

    });
   
})
