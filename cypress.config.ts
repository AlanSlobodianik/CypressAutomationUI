import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://uitestingplayground.com',
    setupNodeEvents(on, config) {
    },
    env:{
        stage:'https://stage.pasv.us/course',
        prod:'https://coding.pasv.us/course',
        info:'Hello World!',
        base:'https://uitestingplayground.com',
        expected:'https://play1.automationcamp.ir/expected_conditions.html'

    }
  },
    defaultCommandTimeout: 5_000,
});