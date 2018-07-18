import React from 'react';
import { SpriteSheet } from 'react-spritesheet';
import { default as AnimatedSpriteSheet } from 'react-responsive-spritesheet';
import logoSpriteSheet from './StartLogo.png';
import menuSpriteSheet from './StartMenu.png';
import './StartMenu.css';

const { Component } = React;

const menuData = {
  background: {
    x: 13,
    y: 63,
    width: 1349,
    height: 1341,
  },
  button: {
    x: 1426,
    y: 462,
    width: 587,
    height: 195,
  },
  buttonHighlighted: {
    x: 1426,
    y: 712,
    width: 587,
    height: 195,
  },
  indicator: {
    x: 1419,
    y: 1490,
    width: 130,
    height: 128,
  },
};

const StartMenuLogo = () => (
  <div className="StartMenuLogo">
    <AnimatedSpriteSheet
      image={logoSpriteSheet}
      widthFrame={1010}
      heightFrame={512}
      steps={3}
      fps={14}
      autoplay={true}
      loop={true}
    />
  </div>
);

const StartMenuBackground = () => (
  <div className="StartMenuBackground">
    <SpriteSheet filename={menuSpriteSheet} data={menuData} sprite="background" />
  </div>
);
const StartMenuIndicator = () => (
  <div className="StartMenuIndicator">
    <SpriteSheet filename={menuSpriteSheet} data={menuData} sprite="indicator" />
  </div>
);
const StartMenuButtonBase = ({ text }) => (
  <div>
    <span>{text}</span>
    <SpriteSheet filename={menuSpriteSheet} data={menuData} sprite="button" />
  </div>
);
const StartMenuButtonHighlighted = ({ text, onClickHandler }) => (
  <div onClick={onClickHandler}>
    <span>{text}</span>
    <StartMenuIndicator />
    <SpriteSheet filename={menuSpriteSheet} data={menuData} sprite="buttonHighlighted" />
  </div>
);

class HoverSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { isHovered } = this.state;
    const { className, BaseComponent, HoveredComponent, text, onClickHandler } = this.props;

    return (
      <div className={className} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {isHovered ?
          <HoveredComponent text={text} onClickHandler={onClickHandler} /> :
          <BaseComponent text={text} />
        }
      </div>
    );
  }
}

export const StartMenu = ({ onStartClick, onOptionsClick, onExitGameClick }) => (
  <div className="StartMenu">
    <StartMenuLogo />
    <StartMenuBackground />
    <div className="buttons-container">
      <HoverSwitch onClickHandler={onStartClick} className="StartMenuButton" text="START" BaseComponent={StartMenuButtonBase} HoveredComponent={StartMenuButtonHighlighted} />
      <HoverSwitch onClickHandler={onOptionsClick} className="StartMenuButton" text="OPTIONS" BaseComponent={StartMenuButtonBase} HoveredComponent={StartMenuButtonHighlighted} />
      <HoverSwitch onClickHandler={onExitGameClick} className="StartMenuButton" text="EXIT GAME" BaseComponent={StartMenuButtonBase} HoveredComponent={StartMenuButtonHighlighted} />
    </div>
  </div>
);
