
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect(state => ({
  title: state.app.title,
  isVisible: state.app.page === 'about',
}))
export default class About extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    isVisible: PropTypes.bool,
  }

  render() {
    const { title, isVisible } = this.props;
    if (!isVisible) return null;

    return (
      <div>About page, and title is still: {title}</div>
    );
  }
}
