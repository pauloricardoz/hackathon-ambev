/// <reference types="cypress" />

describe('pedido', () => {
  it('deve acessar lista de produtos', () => {
    cy.visit('http://localhost:3000/pedido');
    cy.get('[data-cy="list"]').click();
  });
});
