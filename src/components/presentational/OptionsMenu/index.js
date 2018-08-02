import React from 'react';

import OptionsMenuSprite from './OptionsMenu.png';

import './OptionsMenu.css';

export const OptionsMenu = ({ title, BodyComponent }) => (
  <div className="OptionsMenu">
    <div className="OptionsMenuContainer" style={{ backgroundImage: `url(${OptionsMenuSprite})` }}>
      <header>
        {title}
      </header>
      <main>
        <BodyComponent />
      </main>
    </div>
  </div>
);
