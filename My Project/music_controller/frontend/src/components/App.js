import React, { Component } from 'react';
import { render } from 'react-dom';

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;

const appdiv = document.getElementById('app');
render(<App />, appdiv);
