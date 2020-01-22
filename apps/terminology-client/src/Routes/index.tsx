import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../scenes/BaseCategory';
import Clinical from '../scenes/Clinical';
import Medical from '../scenes/Medical';

function Page() {
  return (
    <Switch>
      <Route exact path="/" component={Clinical} />
      <Route exact path="/clinical" component={Clinical} />
      <Route exact path="/medical" component={Medical} />
      <Route
        exact
        path="/pharmaceutical"
        component={() => <div>content</div>}
      />
      <Route exact path="/laboratory" component={() => <div>content</div>} />
      <Route
        exact
        path="/digital-health"
        component={() => <div>content</div>}
      />
      <Route exact path="/public-health" component={() => <div>content</div>} />
    </Switch>
  );
}

export default Page;
