/// <reference types="cypress" />

describe('schedule', () => {
  /* it('Alterar CEP', () => {
    cy.visit('http://localhost:3000/agendamento');
    cy.get('[class="button alterar-cep"]').click();
  }); */
  it('deve digitar CEP', () => {
    cy.visit('http://localhost:3000/agendamento');
    cy.get('[class="form-control cep-mask"]').type('30315500');
  });
  it('deve clicar em buscar', () => {
    cy.visit('http://localhost:3000/agendamento');
    cy.get('[class="button"]').click({ force: true });
  });
  it('deve clicar em buscar', () => {
    cy.visit('http://localhost:3000/agendamento');
    cy.get('[ class="button"]').click({ force: true });
  });
});
