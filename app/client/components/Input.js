
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

export class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
  }

  render() {
    const {
      onChange,
      placeholder,
      value,
    } = this.props;

    return (
      <div>
        <p>SOME LABEL</p>
        <input
          className={styles.container}
          defaultValue={value}
          placeholder={placeholder}
          onChange={(e) => { onChange(e.target.value); }}
        />
      </div>
    );
  }
}
