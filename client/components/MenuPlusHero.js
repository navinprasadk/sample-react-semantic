import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import MenuBar from './MenuBar';
import Hero from './Hero';
import '../styles/style.css';

const MenuPlusHero = () => (
<div className="MenuPlusHero">
<MenuBar/>
<Hero/>
</div>

)
export default MenuPlusHero
