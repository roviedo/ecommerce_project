import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

class App extends Component {
  // constructor() {
  //   super() 
  // }

  render() {
    return (
      
      <div className="App">
        <Products />
      </div>
    )
  }
}

export default App;
