import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App';
import NavBar from './client/components/NavBar';
import JumbotronTop from './client/components/Jumbotron';
ReactDOM.render(
  <div>
  <NavBar/>
  <JumbotronTop/>
  </div>,
  document.getElementById('reactApp')
);
