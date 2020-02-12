import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../scenes/BaseCategory';
import Concepts from '../scenes/Concepts';
import Concept from '../scenes/Concept';

function Page() {
  return (
    <Switch>
      <Route exact path="/*/view/:id" component={Concepts} />
      <Route exact path="/*/view/:id/:search" component={Concepts} />
      <Route exact path="/*/view/:id/:conceptId" component={Concept} />
      <Route exact path="/*" component={Category} />
    </Switch>
  );
}

export default Page;
