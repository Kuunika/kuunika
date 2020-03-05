import React from 'react';
import { render } from '@testing-library/react';

import { MenuView } from './index';
import Store from '../../../../services/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Menu', () => {
  it('should render all menu items', () => {
    const data = {
      items: [
        {
          name: 'clinical',
          displayName: 'Clinical',
          link: './clinical',
          icon: ['fas fa-ambulance']
        },
        {
          name: 'Menu2',
          displayName: 'Menu2',
          link: './menu2',
          icon: ['fas fa-user-md']
        },
        {
          name: 'Menu3',
          displayName: 'Menu3',
          link: './menu3',
          icon: ['fas fa-pills']
        }
      ]
    };
    const { baseElement } = render(
      <Provider store={Store}>
        <BrowserRouter>
          <MenuView {...data} loading={false} />
        </BrowserRouter>
      </Provider>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
