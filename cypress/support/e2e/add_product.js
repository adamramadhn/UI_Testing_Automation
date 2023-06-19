describe("Tambah Produk", async () => {

    it("Tambah Produk Automation", () => {
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
        //klik menu produk
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click()
        //klik button tambah
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.url().should('include', '/products/create')
        //input nama
        cy.get('#nama').click().type('Ayam Goreng')
        //input deskripsi
        cy.get('#deskripsi').click().type('Ayam Goreng dengan Nasi Rempah-Rempah mantap')
        //input harga beli
        cy.get('#harga\\ beli').click().type('23.000')
        //input harga jual
        cy.get('#harga\\ jual').click().type('30.000')
        //input stok
        cy.get('#stok').click().clear().type('5')
        //klik pilihan kategori
        cy.get('#kategori').click()
        cy.wait(1000)
        //klik kategori yang memiliki string Umum
        cy.contains('Umum').click()
        //klik button simpan
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()


    })
})