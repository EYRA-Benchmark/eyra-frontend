/// <reference types="Cypress" />
context('Root', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should be rendered', () => {
    // https://on.cypress.io/type
    cy.get('div#root').should('be.visible');
  });
})
