// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {loginPageSelectors} from '../constants/selectors'

Cypress.Commands.add("loginViaUI",(email,password)=>{
    cy.visit("/");
    cy.clearAndType(loginPageSelectors.emailTextField, email);
    cy.clearAndType(loginPageSelectors.passwordTextField, password);
    cy.get(loginPageSelectors.signInButton).click();
})

Cypress.Commands.add("clearAndType", (selector, text) => {
    cy.get(selector).clear().type(text);
  });

Cypress.Commands.add("verifyToastMessage", (selector,message) => {
    cy.get(selector)
      .should("be.visible")
      .should("have.text", message);
})

