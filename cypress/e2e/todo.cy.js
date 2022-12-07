/// <reference types="Cypress"/>
describe('todo actions',()=>{
    beforeEach(()=>{
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get('.new-todo').type('my1 test run{Enter}')
    })
it.only('shoul able to add a new todo',()=>{
    cy.visit("http://todomvc-app-for-testing.surge.sh/")
    cy.get('.new-todo').type('my test run{Enter}')
    cy.get('label').should('have.text','my test run')
    cy.get('.toggle').should('not.be.checked')
   

    
})
it.only('should able to toogle',()=>{
    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line','line-through')
})
it('should able to clear',()=>{
    cy.get('.clear-completed').click()
})
})
/// Note:
//To group test cases use the it functions it()
// Put all the groups test in the describe function dsecribe()
//it.only(), it.skip(), beforeeach()
// To run only a specific test case use the it.only()
//beforeEach(()=>{}) function runs before the test cases
//beforeEach(()=>{}) function can only executed in the describe function describe('',()={})
//You can run Cypress in the terminal by typing (npx cypress run)
//To run a specific file in the terminal (npx cypress run --spec .\cypress\e2e\filename.cy.js)