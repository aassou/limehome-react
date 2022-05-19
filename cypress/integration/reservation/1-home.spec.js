describe('Booking suite Homepage', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:3000')
    })

    it('Access on Homepage and check elements', () => {
        cy.get('nav')
        cy.get('h1').should('contain.text', 'Welcome on our Booking page!')
    })
})