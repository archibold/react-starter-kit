
import React from 'react';

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
        <input
          defaultValue={value}
          placeholder={placeholder}
          onChange={(e) => { onChange(e.target.value); }}
        />
      </div>
    );
  }
}
