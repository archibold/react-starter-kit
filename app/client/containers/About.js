
import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  title: state.app.title,
}))
export default class About extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
  }

  render() {
    const { title } = this.props;
    return (
      <div>About page, and title is still: {title}</div>
    );
  }
}
