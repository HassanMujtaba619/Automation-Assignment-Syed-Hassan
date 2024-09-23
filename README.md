# Playwright Cucumber JS Testing Project

This project uses **JavaScript** along with **Playwright** and **Cucumber.js** for end-to-end testing. It also integrates with CI for automated testing and generates HTML reports for test results.

## Project Structure

- `acceptance/features/`: Contains the feature files written in Gherkin syntax.
- `acceptance/stepDefinitions/`: Holds the step definitions linked to the Gherkin scenarios.
- `acceptance/pageObjects/`: Contains page object models to interact with different parts of the application under test.
- `cucumber.conf.js`: Configuration file for Cucumber.

## Language

The tests and automation scripts are written in **JavaScript**. It is recommended to have a good understanding of JavaScript to extend or modify the test cases.

## Prerequisites

Before running the tests, make sure the following tools are installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://cucumber.io/)

## Getting Started

1. **Clone the repository**:

    ```bash
    git clone https://github.com/HassanMujtaba619/QA_Task_Syed_Hassan.git
    cd playwright-cucumber-js
    ```

2. **Install dependencies**:

    Navigate to the project directory and install the necessary dependencies:

    ```bash
    npm install
    ```

3. **Run Playwright to install browsers**:

    Playwright requires browsers to be installed. Run the following command to install them:

    ```bash
    npx playwright install
    ```

## Running Tests

1. **Run all tests**:

    You can run all the tests using the following command:

    ```bash
    npm test
    ```

2. **Run a specific feature file**:

    To run tests for a specific feature file, use:

    ```bash
    npx cucumber-js acceptance/features/YourFeatureFile.feature
    ```

3. **Run with Playwright options**:

    You can also run tests with Playwright-specific flags (e.g., in headed mode):

    ```bash
    npx cucumber-js --world-parameters '{"browser":"chromium", "headless":false}'
    ```

## Continuous Integration (CI) Setup

This project is set up with **CI integration** to automatically run tests whenever code is pushed to the repository.

### Supported CI Platforms

- **GitHub Actions**: The project includes a `.github/workflows/ci.yml` file that sets up a CI pipeline to run Playwright tests on each push and pull request. To ensure the tests run correctly in CI:
  
    - Check the `.github/workflows/ci.yml` file for configuration.
    - Customize it as needed for your repository.
  
### Running Tests in CI

Once you push changes to the repository, the CI pipeline will trigger automatically. It will:

- Install dependencies
- Run the tests in a headless browser environment
- Generate HTML reports for the results

## HTML Report Integration

This project also integrates **HTML report generation** for test results.

### How to Generate HTML Reports

- After running tests, Playwright will automatically generate an HTML report.
- The report will be available in the `reports/` directory of the project.

You can generate and view the report manually by running:

```bash
npx playwright show-report
