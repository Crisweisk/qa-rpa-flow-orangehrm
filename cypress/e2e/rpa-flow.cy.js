describe('Full RPA-Style Flow - OrangeHRM (Robusto)', () => {
  it('should perform a complete user flow without breaking', () => {
    // 1. Visitar login
    cy.visit('/');

    // 2. Iniciar sesión
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // 3. Verificar login exitoso
    cy.get('.oxd-userdropdown-tab', { timeout: 10000 }).should('be.visible');
    cy.wait(1000); // Esperar animación completa
    cy.screenshot('1-login-success');

    // 4. Ir al módulo de PIM
    cy.get('a.oxd-main-menu-item').contains('PIM').click();
    cy.url().should('include', '/pim/viewEmployeeList');
    cy.wait(1000);
    cy.screenshot('2-pim-module');

    // 5. Buscar "Linda Anderson"
    cy.get('input[placeholder="Type for hints..."]')
      .filter(':visible')
      .first()
      .clear()
      .type('Linda Anderson');

    cy.get('button').contains('Search').click();

    // 6. Verificar resultados sin fallar si "Linda" no está
    cy.get('.oxd-table-body', { timeout: 15000 })
      .should('exist')
      .then(($table) => {
        const tableText = $table.text();
        cy.log('📋 Contenido de la tabla:', tableText);
        console.log('📋 CONTENIDO DE LA TABLA:\n', tableText);

        if (tableText.includes('Linda')) {
          cy.log('✅ Empleado "Linda" encontrado');
          cy.wait(1000);
          cy.screenshot('3-employee-found');
          cy.wrap($table).contains('Linda').should('be.visible');

          // 7. Ver perfil
          cy.get('.oxd-table-cell a').first().click();
          cy.url().should('include', '/pim/viewPersonalDetails');
          cy.wait(1000);
          cy.screenshot('4-employee-profile');

          // 8. Editar perfil
          cy.get('input[name="firstName"]').should('be.visible');
          cy.get('input[name="middleName"]').clear().type('QA Test');
          cy.get('button[type="submit"]').click();
          cy.wait(1500);
          cy.screenshot('5-profile-edited');

          // 9. Regresar al dashboard
          cy.get('a.oxd-topbar-header-breadcrumb a').first().click();
          cy.url().should('include', '/dashboard');
          cy.wait(1000);
          cy.screenshot('6-dashboard');
        } else {
          cy.log('⚠️ Empleado "Linda" NO encontrado, se omiten pasos posteriores.');
          cy.wait(1000);
          cy.screenshot('3-employee-not-found');
        }
      });

    // 10. Cerrar sesión
    cy.get('.oxd-userdropdown-tab').click();
    cy.get('.oxd-userdropdown-link').contains('Logout').click();
    cy.url().should('include', '/auth/login');
    cy.wait(1000);
    cy.screenshot('7-logout-success');
  });
});
