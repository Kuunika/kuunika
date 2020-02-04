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
    const { baseElement, getByText, getByTestId, getAllByTestId } = render(
      <CategoryView {...data} />
    );

    expect(getByText(data.pageTitle)).toBeTruthy();
    expect(getByTestId('breadcrumb')).toMatchSnapshot();
    expect(getAllByTestId('category-card').length).toBe(data.data.length);
  });
});
