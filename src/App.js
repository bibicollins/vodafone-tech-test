import React, { Component } from 'react';
import Colour from './Colour.js'
import Capacity from './Capacity.js'
import Title from './Title.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title />
      <Colour />
      <Capacity />
      </div>
    );
  }
}

export default App;
