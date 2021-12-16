import React, { Component } from 'react';
import './App.css';
import Carlist from './components/Carlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CarList</h1>
        </header>  
        <Carlist />    
      </div>
    );
  }
}

export default App;
