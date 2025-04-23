
# QA RPA Flow OrangeHRM 🚀

**`qa-rpa-flow-orangehrm`** is an automated Robotic Process Automation (RPA) testing project for the **OrangeHRM** application. This project automates a complete user flow using **Cypress**, ensuring that core processes like logging in and managing employees are validated with a full RPA pipeline.

---

## 📁 Project Structure

```
qa-rpa-flow-orangehrm/
│
├── .github/
│   └── workflows/               # GitHub Actions workflows
│
├── cypress/
│   ├── e2e/
│   │   └── rpa-flow.cy.js       # Cypress RPA Flow Test
│   ├── reports/                 # Mochawesome Reports
│   ├── screenshots/             # Cypress Screenshots
│   └── cypress.config.js        # Cypress configuration
│
├── node_modules/                # Installed node modules
├── ui-tests/                    # UI Testing Resources
├── .gitignore                   # Git ignore file
├── README.md                    # This file
├── package-lock.json            # NPM lock file
├── package.json                 # NPM configuration file
├── trigger.txt                  # Trigger file for automation
└── merged-output.json           # Merged test output (optional)
```

---

## 🚀 How to Run the Tests

### ✅ 1. RPA Test (Cypress)

```bash
npx cypress open  # Opens Cypress UI for manual test execution
```

For headless testing:

```bash
npx cypress run --headless --browser chrome
```

---

## ⚙️ CI with GitHub Actions

Whenever you push to `main`, GitHub Actions automatically:

- Runs the RPA flow tests in Cypress
- Generates a visual HTML report
- Uploads the report as a downloadable artifact

See it under the [Actions](https://github.com/Hyokenhi/qa-rpa-flow-orangehrm/actions) tab.

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Passionate about automation, RPA, and continuous learning, aiming to grow in the field of QA Automation.  
💡 Committed to enhancing software quality through effective and automated testing solutions.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Crisweisk](https://github.com/Hyokenhi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
