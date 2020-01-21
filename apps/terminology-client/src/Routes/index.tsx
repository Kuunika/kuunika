import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Page() {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>content</div>} />
      <Route exact path="/clinical" component={() => <div>content</div>} />
      <Route exact path="/medical" component={() => <div>content</div>} />
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
