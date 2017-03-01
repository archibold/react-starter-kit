
import React from 'react';
import { connect } from 'react-redux';

@connect(s => s.app)
export default class App extends React.Component {
  render() {
    return (
      <div>Hello world!<a href="about">About</a></div>
    );
  }
}
