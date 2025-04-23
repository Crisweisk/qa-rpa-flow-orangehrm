const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/.jsons',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      // Puedes agregar eventos personalizados si es necesario
    },
  },
});
