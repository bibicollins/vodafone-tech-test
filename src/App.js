import React, { Component } from 'react';
import Colour from './Colour.js'
import Title from './Title.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title />
      <Colour />
      </div>
    );
  }
}

export default App;
