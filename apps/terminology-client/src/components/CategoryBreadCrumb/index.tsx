import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config/theme';
function CategoryBreadCrumb() {
  return (
    <Wrapper>
      <span>Category: </span>
      <Location> Clinical</Location>
      <Separator />
      <Location>Terms</Location>
      <Separator />
      <Location>ICD10 </Location>
    </Wrapper>
  );
}

export default CategoryBreadCrumb;

const Wrapper = styled.h2`
  color: ${theme.darkColor};
  font-size: 1.8rem;
  font-weight: 550;
`;
const Location = styled.i`
  cursor: pointer;
`;
const Separator = styled.span`
  ::before {
    content: '/';
  }
  font-size: 2rem;
  margin: 0rem 0.2rem;
`;
