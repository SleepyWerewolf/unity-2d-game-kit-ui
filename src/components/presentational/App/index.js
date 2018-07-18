import React from 'react';
import './App.css';
import { StartMenu } from '../StartMenu';

const { Component } = React;

class App extends Component {
  render() {
    return (
      <div className="App">
        <StartMenu
          onStartClick={() => console.log('Clicked start')}
          onOptionsClick={() => console.log('Clicked options')}
          onExitGameClick={() => console.log('Clicked exit')}
        />
      </div>
    );
  }
}

export default App;
