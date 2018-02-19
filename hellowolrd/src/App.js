// 
import React, { Component } from 'react';
import './App.css';
import './HelloWorld';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
      return (
        <div>
          <header>
            <h1 className="App-title">Hello World App</h1>
          </header>
          <p>
            <HelloWorld />
          </p>
        </div>
      );
  }
}

export default App;
