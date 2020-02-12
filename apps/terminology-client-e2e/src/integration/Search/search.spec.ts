/// <reference types="Cypress" />

import { Category } from '../../../../terminology-client/src/services/utils/@types';
const config = require('../../support/config.json');

describe('terminology-client', () => {
  console.log(config);
  const FRONTEND_URL = config.FRONTEND_URL;
  before(() => cy.visit('/'));

  it('should display menu', () => {
    cy.get('[data-testid=menu-container]').should('be.visible');
  });
  it('should display menu items', () => {
    // @ts-ignore
    cy.getMenu().then(results => {
      const categories = results.data as Array<Category>;
      for (const category of categories) {
        cy.get(
          `[data-testid=menu-${category.categoryTitle
            .toLowerCase()
            .replace(' ', '')}]`
        ).contains(category.categoryTitle);
      }
    });
  });
  it('should navigate on menu item click', () => {
    // @ts-ignore
    cy.getMenu().then(results => {
      const categories = results.data as Array<Category>;
      if (categories.length > 0) {
        const category = categories[0];
        cy.get(
          `[data-testid=menu-${category.categoryTitle
            .toLowerCase()
            .replace(' ', '')}]`
        ).click({ force: true });
        cy.location().should(loc => {
          expect(loc.href).to.eq(
            `${FRONTEND_URL}/${category.categoryTitle
              .replace(' ', '-')
              .toLocaleLowerCase()}`
          );
        });
        cy.get(`[data-testid=page-title]`).contains(
          `${category.categoryTitle.toLowerCase()}`
        );
      }
    });
  });
});
