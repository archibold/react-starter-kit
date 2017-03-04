import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import About from 'containers/About';
import NoMatch from 'containers/NoMatch';
import Content from 'containers/Content';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Content} />
    <Route path="about" component={About}>
      <IndexRoute component={NoMatch} />
      <Route path="*" component={NoMatch} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Route>
);

export default Routes;
