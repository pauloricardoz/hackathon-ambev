/// <reference types="cypress" />

describe('schedule', () => {
  it('deve acessar calendário', () => {
    cy.visit('http://localhost:3000/agendamento');
    cy.get('[data-cy="calendly"]').click({ force: true });
  });
  it('deve adicionar pedido', () => {
    cy.visit('http://localhost:3000/agendamento');
    cy.get('[data-cy="btn"]').click({ force: true });
  });
  it('deve digitar CEP', () => {
    cy.visit('http://localhost:3000/agendamento');
    cy.get('[class="form-control cep-mask"]').type('30315500');
  });
});
