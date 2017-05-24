
import React from 'react';

import Main from 'containers/Main';
import About from 'containers/About';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <About />
      </div>
    );
  }

}
