/// <reference types="Cypress" />

import { Category } from '../../../../terminology-client/src/services/utils/@types';
const config = require('../../support/config.json');

describe('Menu', () => {
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
            .replace(/ /gi, '')}]`
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
            .replace(/ /gi, '')}]`
        ).click({ force: true });
        cy.location().should(loc => {
          expect(loc.href).to.eq(
            `${FRONTEND_URL}/${category.categoryTitle
              .replace(/ /gi, '-')
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
