import React from 'react'
import {Container, Header, Grid, Image} from 'semantic-ui-react'
const Home = () => {
  return(
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src='https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png' />
          </Grid.Column>
          <Grid.Column width={14}>
            <Header as='h1'>Jose Romero</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
          <p>Full-Stack developer with a passion for developing of all types, and sizes.</p>
          <p>With experience in Ruby on Rails, JavaScript, and React and a background in
            Computer Engineering.</p>
          <p>Strong teamwork skills, having worked at entry level to management.</p>
          <p>I have vast experience teams and creating an environment that encourages extraordinary results.</p>
          <p>Dependable and always willing to take on any task and learn something new.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Home
