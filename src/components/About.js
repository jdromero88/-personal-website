import React from 'react'
import {Container, Header, Grid, Image} from 'semantic-ui-react'
import joseRomero from '../assets/Jose-Romero.jpg'
const About = () => {
  return(
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src={joseRomero} />
          </Grid.Column>
          <Grid.Column width={11}>
            <Header className='home' as='h1'>José  Romero</Header>
            <p className='homep'>Me mude a Washington DC, el 8 enero del 2016.</p>
            <p className='homep'>El 14 de febrero del 2020 termine el programa de Software Engineer en Flatiron School.</p>
            <p className='homep'>Estoy emocionado de poner mis nuevas habilidades en accion en la nueva compania que trabaje.</p>
            <p className='homep'>En mis ratos libres me gusta pasar tiempo con la familia, amigos, jugar al basketball, futbol, ping pong(table tennis), video games</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default About
