import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../scenes/BaseCategory';

function Page() {
  return (
    <Switch>
      <Route exact path="/*" component={Category} />
    </Switch>
  );
}

export default Page;
