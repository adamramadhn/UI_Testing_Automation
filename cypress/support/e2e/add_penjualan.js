describe("Tambah Penjualan", async () => {

    it("Tambah Penjualan Automation", () => {
        //masuk ke url website
        cy.visit(Cypress.env('baseUrl'))
        //input email
        cy.get('#email').type(Cypress.env('email'))
        //input password
        cy.get('#password').type(Cypress.env('password'))
        //klik button login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.contains('kasirAja').should('be.visible')
        cy.wait(2000)
        //klik menu penjualan
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(4) > div > div > div').click()
        cy.wait(500)
        //klik tambah
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.wait(500)
        //klik produk
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > div.css-1xhj18k > button').click()
        cy.wait(500)
        //klik item pertama
        cy.contains('Ayam Goreng').click()
        cy.wait(500)
        //input jumlah bayar
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-1em21z > div > div > div > input').type('50.000').click()
        cy.wait(500)
        //klik bayar
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-1em21z > div > div > button').click()
        cy.wait(500)
        //klik tutup
        cy.contains('tutup').click()
        cy.wait(500)
        //klik dashboard menu
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(2) > div > div > div').click()
        cy.wait(1000)
    })
})