import React from 'react';
import { Grid } from '@material-ui/core';

import styled from 'styled-components';

import { theme } from '../../../config/theme';

function Heading({ data }: Props) {
  return (
    <Wrapper>
      <Grid container spacing={4}>
        {data.map(d => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={d.title}>
            <Title>{d.title}: </Title>
            <span>{d.value}</span>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Heading;

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
`;

const Title = styled.span`
  color: ${theme.darkColor};
  font-weight: bold;
`;
