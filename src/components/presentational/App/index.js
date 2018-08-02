import React from 'react';
import './App.css';
import { StartMenu } from '../StartMenu';
import { OptionsMenu } from '../OptionsMenu';
import { Credits } from '../OptionsMenu/Credits';
import { OptionsMenuButton } from '../OptionsMenu/Buttons/Button';

const { Component } = React;

const Shit = () => (
  <div>
    <OptionsMenuButton onClickHandler={() => console.log('poop')}>
      POOP
    </OptionsMenuButton>
    <Credits />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <OptionsMenu title={'OPTIONS'} BodyComponent={Shit} />
        {/* <StartMenu
          onStartClick={() => console.log('Clicked start')}
          onOptionsClick={() => console.log('Clicked options')}
          onExitGameClick={() => window.close()}
        /> */}
      </div>
    );
  }
}

export default App;
