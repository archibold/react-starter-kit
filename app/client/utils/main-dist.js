import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';

import routes from 'routes';
import { Router } from 'react-router';

export class Main extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
  }

  static defaultProps = {
    store: null,
    history: null,
  }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
