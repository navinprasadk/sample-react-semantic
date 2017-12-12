import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App';
import NavBar from './client/components/NavBar';
import Hero from './client/components/Jumbotron';
import MoviesRunningCarousel from './client/components/MoviesRunningCarousel';
// import Advertisement from './client/components/Advertisement';
ReactDOM.render(
  <div>
  <NavBar/>
  <Hero/>
  <MoviesRunningCarousel/>
  </div>,
  document.getElementById('reactApp')
);
