import React from 'react'
import {Header, Grid, Image} from 'semantic-ui-react'
import joseRomero from '../assets/Jose-Romero.jpg'
const Home = () => {
  return(
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src={joseRomero} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header className='home' as='h1'>José  Romero</Header>
          <p className='homep'>Full-Stack developer with a passion for developing of all types, and sizes.</p>
          <p className='homep'>With experience in Ruby on Rails, JavaScript, and React and a background in
            Computer Engineering.</p>
          <p className='homep'>Strong teamwork skills, having worked at entry level to management.</p>
          <p className='homep'>I have vast experience teams and creating an environment that encourages extraordinary results.</p>
          <p className='homep'>Dependable and always willing to take on any task and learn something new.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Home
