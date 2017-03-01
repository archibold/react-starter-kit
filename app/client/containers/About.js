
import React from 'react';
import { connect } from 'react-redux';

@connect(s => s.app)
export default class About extends React.Component {
  render() {
    return (
      <div>About page!</div>
    );
  }
}
