/// <reference types="Cypress" />

import { ISearch } from '../../../../terminology-client/src/services/utils/@types';
const config = require('../../support/config.json');

describe('Global search', () => {
  const FRONTEND_URL = config.FRONTEND_URL;
  before(() => cy.visit('/'));

  it('should display search textbox', () => {
    cy.get(`[data-testid=search-box]`).should('be.visible');
  });
  describe('should show results on search', () => {
    const searchValue = 'Polio';
    let searchResults: ISearch = { searchTerm: '', searchCategories: [] };

    it('should show type in search box', () => {
      // @ts-ignore
      cy.searchConcept(searchValue).then(result => {
        searchResults = result.data;
      });
      cy.get(`[data-testid=search-box]`).type(searchValue);
    });

    it('should show results on search', () => {
      cy.get('[data-testid=search-container]').should('be.visible');

      cy.get('[data-testid=search-result-item]>div>p').each((el, index) => {
        cy.wrap(el).contains(
          `${searchResults.searchCategories[index].numberOfResults} records found`
        );
      });
    });
    it('should redirect to results table', () => {
      if (searchResults.searchCategories.length > 0) {
        cy.get('[data-testid=search-result-btn]')
          .first()
          .click();
        cy.location().then(loc => {
          const locationArray = loc.pathname.split('/');
          expect(searchValue).equals(locationArray[locationArray.length - 1]);
          expect(searchResults.searchCategories[0].sourceId).equals(
            locationArray[locationArray.length - 2]
          );
        });
      }
    });
  });
});
