
import React from 'react';
import styles from './Input.css';

export class Input extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
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
