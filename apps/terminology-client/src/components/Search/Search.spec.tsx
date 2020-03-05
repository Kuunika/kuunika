import React from 'react';
import { render } from '@testing-library/react';

import { SearchView } from './index';
import { SearchResultsView } from './components/SearchResults';
import Store from '../../services/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ISearch } from '../../services/utils/@types';

describe('Global Search', () => {
  it('should render search component', () => {
    const data = {
      searchOpen: false,
      handleClickAway: () => {},
      onFocus: () => {},
      searchValue: '',
      onChange: () => {}
    };
    const wrapper = render(
      <Provider store={Store}>
        <BrowserRouter>
          <SearchView {...data} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it('should render search component open search results', () => {
    const data = {
      searchOpen: true,
      handleClickAway: () => {},
      onFocus: () => {},
      searchValue: 'hello',
      onChange: () => {}
    };
    const wrapper = render(
      <Provider store={Store}>
        <BrowserRouter>
          <SearchView {...data} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it('should renders search results', () => {
    const data = {
      data: {
        searchTerm: 'Helloo',
        searchCategories: [
          {
            breadcrumbCategory: '/clinical',
            numberOfResults: 18,
            sourceId: '23233'
          },
          {
            breadcrumbCategory: '/clinicael',
            numberOfResults: 14,
            sourceId: '23233ds'
          }
        ]
      } as ISearch,
      loading: false,
      error: []
    };
    const wrapper = render(
      <Provider store={Store}>
        <BrowserRouter>
          <SearchResultsView {...data} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it('should show loading state', () => {
    const data = {
      data: {
        searchTerm: 'Helloo',
        searchCategories: [
          {
            breadcrumbCategory: '/clinical',
            numberOfResults: 18,
            sourceId: '23233'
          },
          {
            breadcrumbCategory: '/clinicael',
            numberOfResults: 14,
            sourceId: '23233ds'
          }
        ]
      } as ISearch,
      loading: true,
      error: []
    };
    const wrapper = render(
      <Provider store={Store}>
        <BrowserRouter>
          <SearchResultsView {...data} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it('should show no results on empty', () => {
    const data = {
      data: {
        searchTerm: 'Helloo',
        searchCategories: []
      } as ISearch,
      loading: false,
      error: []
    };
    const wrapper = render(
      <Provider store={Store}>
        <BrowserRouter>
          <SearchResultsView {...data} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it('should show no results on error', () => {
    const data = {
      data: {
        searchTerm: 'Helloo',
        searchCategories: []
      } as ISearch,
      loading: false,
      error: ['Error']
    };
    const wrapper = render(
      <Provider store={Store}>
        <BrowserRouter>
          <SearchResultsView {...data} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
