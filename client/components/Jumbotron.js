import React from 'react';
import Search from './Search';
import { Container, Header, Grid } from 'semantic-ui-react';
import '../styles/style.css';

const Hero = () => (

<Container fluid>
    <Header className="hero">
    <h1 id="heroFirstHeader">NEXUS CINEMAS</h1>
    <Search/>
    </Header>
</Container>

// <Grid >
// <Grid.Row>
// <Grid.Column width={16}>
//     <Header className="hero">
//     <h1 id="heroFirstHeader">NEXUS CINEMAS</h1>
//     <Search/>
//     </Header>
//     </Grid.Column>
//   </Grid.Row>
// </Grid>

)

export default Hero
