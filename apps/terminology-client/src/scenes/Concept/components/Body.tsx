import React from 'react';
import { Grid } from '@material-ui/core';

import styled from 'styled-components';

import { theme } from '../../../config/theme';

function Body({ data }: Props) {
  return (
    <Wrapper>
      <Heading>Description</Heading>
      {data.map(d => (
        <div key={d.title} data-testid="description-body">
          <Title>{d.title}: </Title>
          <p>{d.value}</p>
        </div>
      ))}
    </Wrapper>
  );
}

export default Body;

interface Props {
  data: Array<{ title: string; value: string }>;
}
const Wrapper = styled.div`
  margin: 1rem 0rem;
  background: white;
  padding: 1rem;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  font-size: 1.2rem;
  & p {
    margin: 0.5rem 0rem 1rem;
  }
`;
const Heading = styled.div`
  color: ${theme.darkColor};
  font-weight: bold;
  font-size: 1.7rem;
  margin: 1rem 0rem;
`;

const Title = styled.div`
  color: ${theme.darkColor};
  font-weight: bold;
`;
