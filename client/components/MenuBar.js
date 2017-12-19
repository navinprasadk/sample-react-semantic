import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../styles/style.css';

export default class MenuBar extends Component {
  constructor(props){
    super(props);
      this.state = { activeItem: 'home' }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary fixed='top' size='large'>
        <Menu.Item id="titleOnMenuBar" title="NEXUS  Cinemas | Feel the movie " style={{fontWeight:"bolder",color:"white"}} name='N E X U S' active={this.state.activeItem === 'Home'} onClick={()=>{this.setState({ activeItem: "Home" })}} />
        <Menu.Menu position='right'>
          <Menu.Item style={{fontWeight:"bolder",color:"white"}} name='Movies' active={this.state.activeItem === 'Movies'} onClick={()=>{this.setState({ activeItem: "Movies" })}} />
          <Menu.Item style={{fontWeight:"bolder",color:"white"}} name='Facilities' active={this.state.activeItem === 'Facilities'} onClick={()=>{this.setState({ activeItem: "Facilities" })}} />
          <Menu.Item  style={{fontWeight:"bolder",color:"white"}} name='Events' active={this.state.activeItem === 'Events'} onClick={()=>{this.setState({ activeItem: "Events" })}} />
          <Menu.Item style={{fontWeight:"bolder",color:"white"}} name='Contact us' active={this.state.activeItem === 'Contact us'} onClick={()=>{this.setState({ activeItem: "Contact us" })}} />

        </Menu.Menu>
      </Menu>
    )
  }
}
