/// <reference types="Cypress"/>
describe('my first',()=>{
   beforeEach(()=>{
   
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get('.new-todo').type('my1 test run{Enter}')
        cy.get('.new-todo').type('my2 test run{Enter}')
        cy.get('.new-todo').type('my3 test run{Enter}')
    })

it('second strik',()=>{
    cy.get(':nth-child(2) > .view > .toggle').click()
    cy.get(':nth-child(2) > a').click()
    cy.get('.view > label').should('have.length',2)
})
it('all lenght',()=>{
    cy.get('.view > label').should('have.length',3)
})
})
/// Remember that the beforeEach(()=>{}) function can be run after an it() action is performed. line 11