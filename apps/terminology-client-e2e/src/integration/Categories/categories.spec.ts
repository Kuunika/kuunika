/// <reference types="Cypress" />

import { Category } from '../../../../terminology-client/src/services/utils/@types';
const config = require('../../support/config.json');

describe('traverses through all categories', () => {
  const FRONTEND_URL = config.FRONTEND_URL;
  before(() => cy.visit('/'));

  it('traverses through categories ', () => {
    // @ts-ignore
    cy.getMenu().then(results => {
      const categories = results.data as Array<Category>;
      recursiveCategoriesTest(categories);
    });
  });
});

const recursiveCategoriesTest = (data: Array<Category>) => {
  if (data == null || data.length == 0) {
    cy.visit('/');
    return;
  }
  for (const [index, category] of data.entries()) {
    cy.get(`[data-testid=category-card]`)
      .eq(index)
      .contains(category.categoryTitle);

    if (category.categories != null && category.categories.length > 0) {
      cy.get(`[data-testid=category-card]`)
        .eq(index)
        .children()
        .eq(2)
        .click();
    }

    recursiveCategoriesTest(category.categories);
  }
};
