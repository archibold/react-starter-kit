import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import About from 'containers/About';
import NoMatch from 'containers/NoMatch';
import Content from 'containers/Content';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Content} />
    <Route path="about" component={About} />
    <Route path="*" component={NoMatch} />
  </Route>
);

export default routes;
