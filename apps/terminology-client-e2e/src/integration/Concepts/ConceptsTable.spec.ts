/// <reference types="Cypress" />

import {
  Category,
  CategoryData
} from '../../../../terminology-client/src/services/utils/@types';
const config = require('../../support/config.json');

describe('Shows Concepts Table', () => {
  const FRONTEND_URL = config.FRONTEND_URL;
  before(() => cy.visit('/'));

  let tableData = {} as CategoryData;

  it('navigates to the table ', () => {
    // @ts-ignore
    cy.getMenu().then(results => {
      const categories = results.data as Array<Category>;
      recursiveCategoriesTest(categories);
    });
    cy.get('[data-testid=concepts-table]').should('be.visible');
  });

  it('Displays valid headers', () => {
    cy.location().then(loc => {
      const sourceId = loc.pathname.split('/')[
        loc.pathname.split('/').length - 1
      ];
      // @ts-ignore
      cy.getConcepts(sourceId).then(results => {
        tableData = results.data;

        cy.get('[data-testid=concepts-table] table thead tr')
          .children()
          .each((element, index) => {
            cy.wrap(element).contains(tableData.sourceHeadings[index]);
          });
      });
    });
  });

  it('Displays valid information', () => {
    cy.location().then(loc => {
      const conceptId = loc.pathname.split('/')[
        loc.pathname.split('/').length - 1
      ];
      // @ts-ignore
      cy.getConcepts(conceptId).then(results => {
        tableData = results.data;

        cy.get('[data-testid=concepts-table] table tbody tr').each(
          (element, rowIndex) => {
            cy.wrap(element)
              .children()
              .each((element, index) => {
                cy.wrap(element).contains(
                  tableData.results[rowIndex][tableData.sourceHeadings[index]]
                );
              });
          }
        );
      });
    });
  });
});

const recursiveCategoriesTest = (data: Array<Category>) => {
  if (data == null || data.length == 0) {
    return;
  }

  cy.get(`[data-testid=category-card]`)
    .first()
    .contains(data[0].categoryTitle);
  cy.get(`[data-testid=category-card]`)
    .first()
    .children()
    .eq(2)
    .click();
  recursiveCategoriesTest(data[0].categories);
};
