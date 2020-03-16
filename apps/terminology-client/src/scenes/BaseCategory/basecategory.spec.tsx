import React from 'react';
import { render } from '@testing-library/react';

import { CategoryView } from './index';

describe('Base Category', () => {
  it('should render all categories successfully', () => {
    const data = {
      pageTitle: 'All categories',
      data: [
        {
          title: 'Terms',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus, dolorum quaerat quis cumque sed possimus. Beatae enim laborum dolorem non, voluptates, ipsam at similique nam repellat debitis, assumenda officiis.',
          icons: [],
          onClick: () => {}
        },
        {
          title: 'Clinical',
          content: '',
          icons: [],
          onClick: () => {}
        }
      ],
      breadCrumb: ['clinical']
    };
    const { baseElement } = render(<CategoryView {...data} loading={false} />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render top level categories successfully', () => {
    const data = {
      pageTitle: 'All categories',
      data: [
        {
          title: 'Terms',
          content: 'test',
          icons: ['fas fa-ambulance'],
          onClick: () => {}
        },
        {
          title: 'Service',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus, dolorum quaerat quis cumque sed possimus. Beatae enim laborum dolorem non, voluptates, ipsam at similique nam repellat debitis, assumenda officiis.',
          icons: ['fas fa-user-md', 'fas fa-user-nurse'],
          onClick: () => {}
        }
      ],
      breadCrumb: ['clinical']
    };
    const { baseElement } = render(<CategoryView {...data} loading={false} />);
    expect(baseElement).toMatchSnapshot();
  });
});
