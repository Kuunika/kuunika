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
          content: 'test',
          onClick: () => {}
        }
      ],
      breadCrumb: ['clinical']
    };
    const { baseElement } = render(<CategoryView {...data} loading={false} />);
    expect(baseElement).toMatchSnapshot();
  });
});
