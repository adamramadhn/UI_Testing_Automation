const { defineConfig } = require('cypress')

module.exports = defineConfig({

    e2e: {
        
        baseUrl: 'https://kasirdemo.belajarqa.com',

        specPattern: 
        [
            // "cypress/support/e2e/registration.js",
            "cypress/support/e2e/login.js",
            "cypress/support/e2e/add_product.js",
            "cypress/support/e2e/add_penjualan.js",
    
        ],

        supportFile: false,

    },
    env: {
        baseUrl: 'https://kasirdemo.belajarqa.com',
        email: 'akunkuyangke4@gmail.com',
        password: 'password',
        name: 'adam',


    }

})