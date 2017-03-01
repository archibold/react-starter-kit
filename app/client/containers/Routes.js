
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import App from 'containers/App';
import About from 'containers/About';
import NoMatch from 'containers/NoMatch';

@connect(s => s.app)
export default class Routes extends React.Component {

  static propTypes = {
    browserHistory: React.PropTypes.object,
  }

  render() {
      console.log(this.props.browserHistory);
      console.log('YAY');

    return (
      <Route path="/" component={App}>
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch} />
      </Route>
    );
  }
}
