const { defineConfig } = require("cypress")
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
  reporter:"mochawesome",
  reporterOptions:{
    charts:true,
    overwrite:false,
    html:false,
    JSON:true,
    reportDir:"cpyress/reports"
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
  on('task', {downloadFile})
  
    },
  },
});



