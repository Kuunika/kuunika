import React from 'react';
import { render } from '@testing-library/react';

import { ConceptsView } from './index';
import { CategoryData } from '../../services/utils/@types';
import { BrowserRouter } from 'react-router-dom';

describe('Concepts Page', () => {
  it('should render concepts page', () => {
    const data = {
      data: {
        sourceHeadings: ['id', 'name'],
        results: [
          { id: 1, name: 'name' },
          { id: 2, name: 'name2' },
          { id: 3, name: 'name3' }
        ],
        formatedData: [
          { id: 1, name: 'name' },
          { id: 2, name: 'name2' },
          { id: 3, name: 'name3' }
        ]
      } as CategoryData,

      filter: '',
      onChangeSearch: () => {},
      breadCrumb: ['clinical', 'ICD10']
    };
    const wrapper = render(
      <BrowserRouter>
        <ConceptsView {...data} loading={false} />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
