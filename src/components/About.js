import React from 'react'
import {Container, Header, Grid, Image, Flag} from 'semantic-ui-react'
import joseRomero from '../assets/jose romero.jpg'
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
            <p className='homep'>I was born and raised in San Ignaico, Paraguay<Flag name='py'/>
            In the heart of South America I developed a passion early on for
            computers and everything about them. This is what led me to study
            Computer Engineering at the Universidad Catolica.</p>
            <p className='homep'>I moved to Washington DC in January of 2016.
            After years of rising through the ranks at Chipotle I decided to take
            the plunge and go back to what I loved. That is when I enrolled at
            Flatiron School to study Software Engineering. I finished the program
            in February 2020 and am excited to put my new skills into action.</p>
            <p className='homep'>In my free time I love to spend time with friends
            and family. I play basketball, soccer (or futbol as its called everywhere
            else in the world), ping pong and video games.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default About
