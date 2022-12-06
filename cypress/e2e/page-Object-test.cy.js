
import todo from "./pageObject.cy.js";
describe('object',()=>{
it('login',()=>{
    const log = new todo()
    log.visit()
    log.type("object")
    log.type('object1')
    log.len()
    log.toggle()
    log.explict1()
    log.checked()
    log.line_through()
   log.complete()
   log.overall()
}) 
/*it("login",()=>{
    const log = new todo()
    log.visit()
    log.type("object")
    log.typee('object1')
    log.len()
    log.toggle()
    log.explict1()
})*/
})