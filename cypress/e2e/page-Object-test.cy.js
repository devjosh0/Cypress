
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
})
})