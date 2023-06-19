
describe("Registration", () => {

    it("Registration Automation", () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.css-4rvv7a > a').click()
        cy.get('#name').type(Cypress.env('name'))
        cy.get('#email').type(Cypress.env('email'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
    })

})