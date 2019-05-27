it('should have correct h1 text', () => {
  cy.visit('/');
  cy.getByText('App');
});
