/// <reference types="cypress" />
var faker = require('faker');
var faker = require('faker-br');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('login/')
    });

    it('Deve completar o pré cadastro-PF com sucesso', () => {
        cy.get('.mt_20 > .forgotPass').click()
        cy.get('.custom-select').select('Pessoa Física') 

        let name = faker.name.firstName() + (' ') + faker.name.lastName();
        let email = faker.internet.email(name);
        let phone = faker.phone.phoneNumber();
        let meuCpf = faker.br.cpf();

        cy.get(':nth-child(5) > :nth-child(1) > .ng-untouched').type(name)
        cy.get(':nth-child(2) > .ng-untouched').type('xxx@yyy.com')
        cy.get(':nth-child(6) > .input-field > .ng-untouched').type(phone)
        cy.get(':nth-child(7) > .input-field > .ng-untouched').type(meuCpf)
        cy.get(':nth-child(8) > .input-field > .ng-untouched').type('Senh@123')
        cy.get('#user_password_confirmation').type('Senh@123')
        cy.get('#termos-de-uso').click()
        cy.get('.row > :nth-child(11)').click()
        
         //      cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    });
})





 
