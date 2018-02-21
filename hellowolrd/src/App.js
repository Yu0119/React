import React, { Component } from 'react';
import './App.css';
import './HelloWorld';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
      return (
        <div>
          <header>
            <h1 className="App-title">Welcome</h1>
          </header>
          <p>
            <HelloWorld name="World"/>
          </p>
        </div>
      );
  }
}

export default App;
