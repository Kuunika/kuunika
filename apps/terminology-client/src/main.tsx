import React from 'react';
import ReactDOM from 'react-dom';

import Store from './services/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';

import App from './app/app';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
