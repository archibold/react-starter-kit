
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string,
  }

  static defaultProps = {
    onClick: () => {},
  }

  render() {
    const {
      onClick,
      children,
    } = this.props;

    return (
      <div>
        <button
          className={styles.container}
          onClick={onClick}
        >
          { children }
        </button>
      </div>
    );
  }
}
