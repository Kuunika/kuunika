import React, { useEffect } from 'react';

import styled from 'styled-components';
import { Grid, Hidden } from '@material-ui/core';

import SideBar from '../components/SideBar';

import Page from '../Routes';
import { useDispatch } from 'react-redux';

import Search from '../components/Search';

import { getCategories } from '../services/redux/actions/data';

const ContentContainer = styled.div`
  padding: 30px;
  @media (max-width: 960px) {
    padding-top: 110px;
  }
`;

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  });

  return <AppView />;
}

export default App;

export const AppView = () => {
  return (
    <ContentContainer>
      <Grid container spacing={4}>
        <Hidden smDown>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <SideBar />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <Search />
          <Page />
        </Grid>
      </Grid>
    </ContentContainer>
  );
};
