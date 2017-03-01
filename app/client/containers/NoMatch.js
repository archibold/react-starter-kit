
import React from 'react';
import { connect } from 'react-redux';

@connect(s => s.app)
export default class NoMatch extends React.Component {
  render() {
    return (
      <div>No match</div>
    );
  }
}
