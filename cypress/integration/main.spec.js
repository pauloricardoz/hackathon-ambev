/// <reference types="cypress" />

describe('main', () => {
  it('deve acessar home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="main"]').click();
  });
});
