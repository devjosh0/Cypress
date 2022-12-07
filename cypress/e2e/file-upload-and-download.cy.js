///<reference types="Cypress"/>
/// <reference types="cypress-downloadfile"/>

it("file upload",()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('crocus-1279508__340.webp')
})
it('file download',()=>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})
//FILE UPLOAD
// for test cases that upload files
// first, run (npm install --save-dev cypress-file-upload) to download the packages
//Second for you to run the file upload commad, Go to support/command.js
//Type import 'Cypress-file-upload'

//FILE DOWNLOAD
//Run (npm install cypress-downloadfile)
//required('cypress-downloadfile/lib/downloadFileCommand') in the support/command.js
//In cypress.config.js, type const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
// In same file, add   ( on('task', {downloadFile}) ) in e2e object