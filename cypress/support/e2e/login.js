describe("Login", () => {
    it("Submit Login", async () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include', '/login')
    })
    it("Login Automation", () => {
        //masuk ke url website
        cy.visit(Cypress.env('baseUrl'))
        //input email
        cy.get('#email').type(Cypress.env('email'))
        //input password
        cy.get('#password').type(Cypress.env('password'))
        //klik button login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.contains('kasirAja')
        cy.wait(1000)
    })
})