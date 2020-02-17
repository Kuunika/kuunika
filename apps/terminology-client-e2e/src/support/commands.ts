// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import API from '../../../terminology-client/src/services/api'; // eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    getMenu(): any;
    getConcepts(id: string): any;
    getConcept(id: string, conceptId: string): any;
    searchConcept(value: string): any;
  }
}

Cypress.Commands.add('getMenu', () => {
  return API.getCategories();
});

Cypress.Commands.add('getConcepts', id => {
  return API.getCategoryData(id);
});

Cypress.Commands.add('getConcept', (id, conceptId) => {
  return API.getConcept(id, conceptId);
});

Cypress.Commands.add('searchConcept', value => {
  return API.searchConcept(value);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
