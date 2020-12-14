/// <reference types="cypress" />

describe('main', () => {
  it('deve clicar em começar', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="linkbtn"]').click();
  });
});
