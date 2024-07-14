const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    URL:'https://www.amazon.com/',
    USER_EMAIL: 'dciatom@gmail.com',
    PASSWORD: 'shelltest@123',
    PUBLIC_API_URL: 'https://swapi.dev/api/people/1/'
  },
});