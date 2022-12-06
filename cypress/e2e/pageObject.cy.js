/// <reference types="Cypress"/>
 export default class todo{
    visit(){
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    }
    type(value){
        cy.get('.new-todo').type(value + "{Enter}")
    }
    len(){
        cy.get('.new-todo').should('have.length',1)
    }
    toggle(){
        cy.get(':nth-child(2) > .view > .toggle').click()
    }
    explict1(){
        cy.get('.new-todo')
        assert.equal('.new-todo','.new-todo','try')
        expect('.new-todo').to.be.exist
        expect('.new-todo').to.be.string('.new-todo')
        expect('.new-todo').to.be.equal('.new-todo')
       
    }
    checked(){
        cy.get('.completed > .view > .toggle').should('be.checked')
    }
    line_through(){
        cy.get('.completed > .view > label').should('have.css','text-decoration-line','line-through')
    }
    complete(){
        cy.get('.completed > .view > .toggle').click()
        cy.get(':nth-child(3) > a').click() 
    }
    overall(){
        cy.get('.new-todo').should('have.length',1)
    }
}