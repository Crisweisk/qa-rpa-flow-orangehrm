# QA RPA Flow - OrangeHRM

Automated QA testing project simulating a full user flow (RPA-style) in the OrangeHRM system using **Cypress** and **Mochawesome** for HTML reports. This project is designed to replicate realistic user behavior, ensuring the integrity and performance of critical flows such as login, employee search, profile update, and logout.

## 📌 Technologies Used

- [Cypress 14.3.1](https://www.cypress.io/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- JavaScript (ES6+)

## ⚙️ Installation & Setup

```bash
# Clone the repository
https://github.com/Crisweisk/qa-rpa-flow-orangehrm.git

# Install dependencies
npm install
```

## 🚀 Run Tests

```bash
# Run the test suite with Cypress and generate JSON report
npx cypress run --spec "cypress/e2e/rpa-flow.cy.js" --config-file cypress.config.js
```

## 📄 Generate HTML Report

> Mochawesome plugin is configured to automatically generate HTML reports from JSON.

The HTML report will be created at:
```
cypress/reports/index.html
```

Open the file in your browser to view it.

## 📸 Screenshots
Screenshots for each major step (login, employee search, profile update, etc.) are taken automatically and stored in:
```
cypress/screenshots/
```

---

# 📘 QA RPA Flow - OrangeHRM (Español)

Proyecto de automatización QA que simula un flujo completo de usuario (estilo RPA) dentro del sistema OrangeHRM usando **Cypress** y **Mochawesome** para reportes en HTML.

Este flujo incluye: inicio de sesión, búsqueda de empleado, edición de perfil y cierre de sesión.

## 🔧 Tecnologías utilizadas
- Cypress 14.3.1
- Mochawesome
- JavaScript moderno (ES6+)

## 🛠 Instalación y configuración
```bash
# Clona el repositorio
https://github.com/Crisweisk/qa-rpa-flow-orangehrm.git

# Instala las dependencias
npm install
```

## 🧪 Ejecutar pruebas
```bash
npx cypress run --spec "cypress/e2e/rpa-flow.cy.js" --config-file cypress.config.js
```

## 📊 Generar reporte HTML
El reporte HTML se genera automáticamente y se encuentra en:
```
cypress/reports/index.html
```

Abre el archivo en tu navegador para visualizarlo.

---

## 👤 Author
**Cristian Camilo Delgado**  
QA Automation Engineer  
📧 ccdelgado@outlook.es  
📍 Colombia  
🌐 [GitHub](https://github.com/Crisweisk) · [LinkedIn](https://www.linkedin.com/in/cristian-delgado-6bb653233/)

---

### 💡 Notas finales
- Este proyecto forma parte del portafolio profesional de pruebas automatizadas QA.
- El flujo fue ajustado para que no falle en caso de que el empleado "Linda Anderson" no se encuentre.
- Se recomienda ejecutar en entorno limpio y conectado para evitar errores intermitentes por red.

---

> Developed with 💜 by Cristian Delgado
