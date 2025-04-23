
# QA RPA Flow OrangeHRM 🚀

**`qa-rpa-flow-orangehrm`** is an advanced **Robotic Process Automation (RPA)** testing project designed to automate user workflows for the **OrangeHRM** application. Using **Cypress**, this project automates end-to-end tests for key functionalities like logging in, managing employees, and other important processes. The goal is to ensure that the system remains stable and performs as expected across different devices and screen sizes.

This project is tailored to simulate real user actions and automate repetitive testing tasks, ensuring a more efficient, consistent, and high-quality testing process. It integrates seamlessly into **CI/CD** pipelines, supporting continuous testing and automated reporting.

---

## 🔍 Project Overview

The **QA RPA Flow OrangeHRM** project automates the following key user workflows for the **OrangeHRM** application:

- **Login Flow**: Ensures users can successfully log in with valid credentials.
- **Employee Management Flow**: Validates the ability to add, update, and delete employee records.
- **Cross-Device Testing**: Ensures the application performs consistently across various screen sizes (desktop, tablet, mobile).
- **Automated Reporting**: Generates detailed test execution reports using **Mochawesome** for easy tracking and analysis.

These tests are designed to run in **headless mode** for automation, but also provide an interactive mode for debugging and manual inspection when needed.

---

## 📁 Project Structure

The project is well-structured for ease of navigation and maintainability:

```
qa-rpa-flow-orangehrm/
│
├── .github/
│   └── workflows/               # GitHub Actions workflows for CI/CD automation
│
├── cypress/
│   ├── e2e/
│   │   └── rpa-flow.cy.js       # Cypress Test for Automating User Flow
│   ├── reports/                 # Mochawesome Reports for test results
│   ├── screenshots/             # Screenshots captured during test execution
│   └── cypress.config.js        # Cypress configuration file
│
├── node_modules/                # Node modules for Cypress and other dependencies
├── .gitignore                   # Git ignore file
├── README.md                    # This file
├── package-lock.json            # NPM lock file for dependencies
├── package.json                 # NPM configuration file
└── trigger.txt                  # Trigger file for initiating automation (if necessary)
```

---

## 🛠️ Technologies Used

- **Cypress**: The framework used for automating the UI tests and simulating user interactions with the **OrangeHRM** application.
- **GitHub Actions**: Provides **CI/CD** automation for running the Cypress tests on each code change or pull request.
- **Mochawesome**: A reporting tool for generating beautiful HTML reports with detailed test logs and results.
- **Node.js**: JavaScript runtime required to execute Cypress tests and manage the project dependencies.
- **NPM**: Used for managing the project's dependencies and automation scripts.

---

## 🚀 How to Run the Tests

### ✅ 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Hyokenhi/qa-rpa-flow-orangehrm.git
cd qa-rpa-flow-orangehrm
```

### ✅ 2. Install Dependencies

To install the necessary dependencies, run:

```bash
npm install
```

### ✅ 3. Running the Tests Locally

#### UI Test (Cypress)

You can open Cypress to run tests interactively:

```bash
npx cypress open  # Opens Cypress UI for manual test execution
```

For headless testing (recommended for automation):

```bash
npx cypress run --headless --browser chrome
```

#### Generate the Mochawesome Report

To generate a detailed test report after running the tests, use the following command:

```bash
npx cypress run --headless --browser chrome --reporter mochawesome
```

The report will be saved in the `cypress/reports/` folder in HTML format.

---

## ⚙️ CI/CD Integration with GitHub Actions

### Automated Test Execution

Every time you push to the `main` branch, **GitHub Actions** will automatically:

- Run the **Cypress** UI tests for the automated user flow.
- Generate a **Mochawesome** HTML report.
- Upload the generated report as an artifact for easy access.

### Workflow File (`.github/workflows/ci.yml`)

```yaml
name: QA RPA Flow Automation

on:
  push:
    branches:
      - main

jobs:
  run-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run --headless --browser chrome --reporter mochawesome
      - name: Upload test reports
        uses: actions/upload-artifact@v2
        with:
          name: mochawesome-report
          path: cypress/reports/*.html
```

You can monitor the execution of your workflows under the **Actions** tab in your GitHub repository.

---

## 📝 Test Details

- **Login Test**: Automates the login process, ensuring users can log in with valid credentials.
- **Employee Management Test**: Automates employee management workflows (adding, updating, and deleting employee records).
- **Cross-Device Testing**: Ensures that the application renders properly and is functional across various screen sizes (desktop, tablet, mobile).
- **Mochawesome Reports**: Automatically generates detailed test logs, failures, and visual reports for analysis.

---

## ❗ Important Notes

- **Demo Environment**: The **OrangeHRM** demo environment may experience occasional issues, which can lead to test failures (especially with login or employee management workflows). These issues are outside the scope of the automation and may be due to the unstable demo app environment.
  
- **Headless Mode**: It is recommended to run the tests in **headless mode** for CI/CD. For manual inspection, you can use Cypress's interactive mode (`npx cypress open`).

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Passionate about automation, continuous learning, and quality assurance, aiming to contribute and grow in the field of QA Automation.  
💡 Committed to improving software quality through effective and automated testing solutions.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Hyokenhi](https://github.com/Hyokenhi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
