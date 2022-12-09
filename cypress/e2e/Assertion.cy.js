/// <reference types="Cypress"/>
it("Assertions Demo",()=>{
    cy.visit("https://example.cypress.io")
    cy.contains('get').click()
    cy.get('#query-btn')

    // Implicit Assertions ( shoul , and )
         .should('contain','Button')
         .and('have.class','query-btn')
         .and('be.enabled')
         .and('have.id','query-btn')
         .and('be.enabled')
         .and('be.visible')
         .and('exist')
         .and('have.css','color')
        

//Explicit assertions (expect, assert)
expect('query-btn').to.be.string('query-btn')
expect('query-btn').to.be.exist

assert.strictEqual('get',"get","not equal")

         
})