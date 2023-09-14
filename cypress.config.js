const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    screenshotOnRunFailure: false, // Disable capturing screenshots on run failures
    video: true, // Enable video recording for all tests
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/reports"
     }
  },
});
