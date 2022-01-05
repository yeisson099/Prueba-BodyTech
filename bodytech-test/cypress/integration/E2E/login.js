describe("render login page", () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it("render login button", () => {
        cy.url().should('eq', 'http://localhost:3000/')
        cy.get('.btn').contains('Ingresar');
    });

    it("render login spotify", () => {
        cy.get('.btn').click();
        cy.url().should('include', 'https://accounts.spotify.com/es/login')
        cy.get('input:first').type('example');
        cy.get('[data-testid="login-password"]').type('example');
        cy.get('.ButtonInner-sc-14ud5tc-0').click()
    });
})  