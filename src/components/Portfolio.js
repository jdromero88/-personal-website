import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Divider, Grid, Card, Header,
Image, } from 'semantic-ui-react'

const defaultProjectAvatar = 'https://mpng.pngfly.com/20190306/urk/kisspng-computer-icons-portable-network-graphics-clip-art-intention-registration-svg-png-icon-free-download-5c800dc7bcb986.426545291551896007773.jpg'
const Portfolio = () => {
  return(
    <>
      <Divider hidden />
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16} >
              <Header as='h1'>Portfolio</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} >
              <Card.Group itemsPerRow={3} fluid='true'>
                <Card
                as={Link}
                to={`/projects/flatilife`}
                className='transparent-card'
                >
                  <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={defaultProjectAvatar}
                  />
                  <Card.Header>Flati // Life</Card.Header>
                  <Card.Description>
                    Lorem lkasjdf  laksjdflkasd
                  </Card.Description>
                  <Card.Meta>
                    Repository: github.com//jdromero88
                  </Card.Meta>
                  </Card.Content>
                </Card>

                <Card
                as={Link}
                to={`/projects/flatilife`}
                className='transparent-card'
                >
                  <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={defaultProjectAvatar}
                  />
                  <Card.Header>Flati // Life</Card.Header>
                  <Card.Description>
                    Lorem lkasjdf  laksjdflkasd
                  </Card.Description>
                  <Card.Meta>
                    Repository: github.com//jdromero88
                  </Card.Meta>
                  </Card.Content>
                </Card>

                <Card
                as={Link}
                to={`/projects/flatilife`}
                className='transparent-card'
                >
                  <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={defaultProjectAvatar}
                  />
                  <Card.Header>Flati // Life</Card.Header>
                  <Card.Description>
                    Lorem lkasjdf  laksjdflkasd
                  </Card.Description>
                  <Card.Meta>
                    Repository: github.com//jdromero88
                  </Card.Meta>
                  </Card.Content>
                </Card>

                <Card
                as={Link}
                to={`/projects/flatilife`}
                className='transparent-card'
                >
                  <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={defaultProjectAvatar}
                  />
                  <Card.Header>Flati // Life</Card.Header>
                  <Card.Description>
                    Lorem lkasjdf  laksjdflkasd
                  </Card.Description>
                  <Card.Meta>
                    Repository: github.com//jdromero88
                  </Card.Meta>
                  </Card.Content>
                </Card>                                                
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider hidden />
    </>
  )
}

export default Portfolio
