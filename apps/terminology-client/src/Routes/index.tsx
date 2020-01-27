import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../scenes/BaseCategory';
import Concepts from '../scenes/Concepts';

function Page() {
  return (
    <Switch>
      <Route exact path="/*/view/:id" component={Concepts} />
      <Route exact path="/*" component={Category} />
    </Switch>
  );
}

export default Page;
