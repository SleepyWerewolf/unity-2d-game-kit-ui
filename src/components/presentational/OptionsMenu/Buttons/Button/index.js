import React from 'react';
import { Sprite } from 'react-spritesheet';

import OptionsMenuButtonsSprite from '../OptionsMenuButtons.png';

import './Button.css';

export const OptionsMenuButton = ({ children, onClickHandler }) => (
  <div className="OptionsMenuButton" onClick={onClickHandler}>
    <Sprite filename={OptionsMenuButtonsSprite} x={29} y={91} width={352} height={136} />
    {children}
  </div>
);
