
import React from 'react';
import { connect } from 'react-redux';

@connect(s => s.app)
export default class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
    }

    render() {
        return (
            <div>Hello world!</div>
        );
    }
}
