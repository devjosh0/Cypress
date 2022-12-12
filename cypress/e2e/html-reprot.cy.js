//HOW TO GENERATE HTML REPORT USING MOCHAWESOME GENERATOR 

//First, install mochawesome library ( npm install mochawesome-report-generator)
//Second, install (npm i mochawesome-merge)
//Third, add bthe below reports configuration to the cypress.congif.js file
/*  reporter:"mochawesome",
reporterOptions:{
    charts:true,
    overwrite:false,
    html:false,
    json:true,
    reportDir:"cpyress/reports"
  },
  */
 //Fourth, run (npm install mochawesome)
 //Fifth, run (npx cypress run --reporter mochawesome)
 //Sixth, To merge all the multiple json report files
 // Run (npx mochawesome-merge .\cypress\reports\*.json | out-file -encoding ascii ./report1.json )
 //Seventh, genegrate report1.json into HTML report we use  marge
 //Run ( npx marge .\report1.json --reportDir .\cpyress\report)