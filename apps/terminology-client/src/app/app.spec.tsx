import React from 'react';
import { render } from '@testing-library/react';

import { App } from './app';
import Store from '../services/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={Store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(baseElement).toBeTruthy();
  });
});
