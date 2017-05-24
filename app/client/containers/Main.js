
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'components/Input';
import {
  changeTitle,
  changePage,
} from 'services/app-service';

@connect(state => ({
  title: state.app.title,
  isVisible: state.app.page === 'main',
}))
export default class Main extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    isVisible: PropTypes.bool,
    dispatch: PropTypes.func,
  }

  render() {
    const {
      title,
      isVisible,
    } = this.props;

    if (!isVisible) return null;

    return (
      <div>
        Hello world! <button onClick={() => { this.onChangePage('about'); }}>Homepage</button>
        <p>{title}</p>
        <Input value={title} onChange={this.onChangeInput} placeholder="Title" />
      </div>
    );
  }

  onChangeInput = (value) => {
    this.props.dispatch(changeTitle(value));
  }

  onChangePage = (value) => {
    this.props.dispatch(changePage(value));
  }
}
