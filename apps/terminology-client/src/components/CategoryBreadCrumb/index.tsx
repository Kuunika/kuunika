import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config/theme';

function CategoryBreadCrumb({ data }: Props) {
  return (
    <Wrapper>
      <b>Category: </b>
      {data.map((text, index) => {
        text = text.replace('-', ' ');
        return (
          <span key={text}>
            <Location>{text}</Location>
            {index < data.length - 1 && <Separator />}
          </span>
        );
      })}
    </Wrapper>
  );
}

export default CategoryBreadCrumb;

interface Props {
  data: Array<string>;
}

const Wrapper = styled.h2`
  color: ${theme.darkColor};
  font-size: 1.8rem;
  font-weight: 550;
`;
const Location = styled.i`
  cursor: pointer;
  text-transform: capitalize;
`;
const Separator = styled.i`
  ::before {
    content: '/';
  }
  font-size: 2rem;
  margin: 0rem 0.2rem;
`;
