import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './client/components/Hero';
import MoviesRunningCarousel from './client/components/MoviesRunningCarousel';
import MenuPlusHero from './client/components/MenuPlusHero';

ReactDOM.render(
  <div>
  <MenuPlusHero/>
  <MoviesRunningCarousel/>
  </div>,
  document.getElementById('reactApp')
);
