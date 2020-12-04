import React, { Component } from 'react';
import Countdown from './Countdown.js';
import logo from './logo.png';
import github from './github.png';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />   
          
        
        </div>   
        <Countdown date={`${year}-12-05T19:00:00`} />     
      </div>
    );
  }
}

export default App;
