/// <reference types="Cypress" />

import {
  Category,
  CategoryData,
  Concept
} from '../../../../terminology-client/src/services/utils/@types';
const config = require('../../support/config.json');

describe('Shows Concepts Table', () => {
  console.log(config);
  const FRONTEND_URL = config.FRONTEND_URL;
  before(() => cy.visit('/'));

  let conceptData = {} as Concept;

  it('navigates to the table ', () => {
    // @ts-ignore
    cy.getMenu().then(results => {
      const categories = results.data as Array<Category>;
      recursiveCategoriesTest(categories);
    });
    cy.get('[data-testid=concepts-table]').should('be.visible');
  });

  it('navigates to description page', () => {
    cy.get('[data-testid=concepts-table] table tbody tr')
      .first()
      .click();
  });
  it('Displays valid headers', () => {
    cy.location().then(loc => {
      const conceptId = loc.pathname.split('/')[
        loc.pathname.split('/').length - 1
      ];
      const sourceId = loc.pathname.split('/')[
        loc.pathname.split('/').length - 2
      ];
      // @ts-ignore
      cy.getConcept(sourceId, conceptId).then(results => {
        conceptData = results.data;

        cy.get('[data-testid=description-header]').each((element, index) => {
          cy.wrap(element)
            .contains(conceptData.headings[index].title)
            .get('span')
            .contains(conceptData.headings[index].value);
        });

        // cy.get('[data-testid=concepts-table] table thead tr')
        //   .children()
        //   .each((element, index) => {
        //     cy.wrap(element).contains(tableData.sourceHeadings[index]);
        //   });
      });
    });
  });

  it('Displays valid descriptions', () => {
    cy.location().then(loc => {
      const conceptId = loc.pathname.split('/')[
        loc.pathname.split('/').length - 1
      ];
      const sourceId = loc.pathname.split('/')[
        loc.pathname.split('/').length - 2
      ];
      // @ts-ignore
      cy.getConcept(sourceId, conceptId).then(results => {
        conceptData = results.data;

        cy.get('[data-testid=description-body]').each((element, index) => {
          cy.wrap(element)
            .get('div')
            .first()
            .contains(conceptData.descriptions[index].title)
            .get('div')
            .eq(1)
            .contains(conceptData.descriptions[index].value);
        });
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
