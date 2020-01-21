import React from 'react';

import styled from 'styled-components';
import { Grid, Hidden } from '@material-ui/core';

import SideBar from '../components/SideBar';

import Page from '../Routes';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const ContentContainer = styled.div`
  padding: 30px;
  @media (max-width: 960px) {
    padding-top: 110px;
  }
`;

export const App = () => {
  return (
    <Router>
      <ContentContainer>
        <Grid container spacing={4}>
          <Hidden smDown>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <SideBar />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Page />
          </Grid>
        </Grid>
      </ContentContainer>
    </Router>
  );
};

export default App;
