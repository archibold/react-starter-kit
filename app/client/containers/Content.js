
import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  title: state.app.title,
}))
export default class Conpent extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <p>Content</p>
      </div>
    );
  }
}
