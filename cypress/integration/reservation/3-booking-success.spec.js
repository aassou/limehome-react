describe('Booking suite success', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:3000')
    })

    it('Make Booking', () => {
        cy.get('.btn').click()
        cy.get('#guestNumber').type('2')
        cy.get('#firstname').type('Robert C.')
        cy.get('#lastname').type('Martin')
        cy.get('#billingAddress').type('Wall Str. 256 New York')
        cy.get('#postalCode').type('52639')
        cy.get('#city').type('New York')
        cy.get('#email').type('unclebob@agile.com')
        cy.get('#phoneNumber').type('091652352')
        cy.get('#submit').click()
        cy.get('.alert-success').should('contain.text', 'Your booking saved successfully!')
    })
})