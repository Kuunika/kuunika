import React from 'react';
import { render } from '@testing-library/react';

import { ConceptView } from './index';
import { Concept as IConcept } from '../../services/utils/@types';

describe('Concept', () => {
  it('should render concept page successfully', () => {
    const data = {
      onBack: () => {},
      data: {
        id: 1,
        headings: [
          { title: 'title', value: 'value' },
          { title: 'new title', value: 'new value' }
        ],
        descriptions: [
          { title: 'des title', value: 'des value' },
          { title: 'new des title', value: 'new des value' }
        ],
        breadcrumb: 'clinical/ICD10'
      } as IConcept,
      breadCrumb: ['clinical', 'ICD10']
    };
    const { baseElement } = render(<ConceptView {...data} loading={false} />);
    expect(baseElement).toMatchSnapshot();
  });
});
