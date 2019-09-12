import React, { Component } from 'react';
import './App.css';
import Router from './components/Router'

class App extends Component {
  render() {
    return (
      <div className="App ml-0 mr-0 p-0">
          <Router />
      </div>
    );
  }  
}

export default App;
