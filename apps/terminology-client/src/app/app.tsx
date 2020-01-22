import React from 'react';

import styled from 'styled-components';
import { Grid, Hidden } from '@material-ui/core';

import SideBar from '../components/SideBar';

import Page from '../Routes';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from '../services/redux/store';
import Search from '../components/Search';
import { PageHeading } from '../components/PageHeading/PageHeading';
import CategoryBreadCrumb from '../components/CategoryBreadCrumb';

const ContentContainer = styled.div`
  padding: 30px;
  @media (max-width: 960px) {
    padding-top: 110px;
  }
`;

export const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <ContentContainer>
          <Grid container spacing={4}>
            <Hidden smDown>
              <Grid item xs={12} sm={12} md={2} lg={2}>
                <SideBar />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Search />
              <PageHeading>Clinical</PageHeading>
              <CategoryBreadCrumb />
              <Page />
            </Grid>
          </Grid>
        </ContentContainer>
      </Router>
    </Provider>
  );
};

export default App;
