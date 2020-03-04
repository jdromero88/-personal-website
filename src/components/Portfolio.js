import React from 'react'
import {Container, Divider, Grid, Card, Image, Icon} from 'semantic-ui-react'
import defaultProjectAvatar from '../assets/hexagon-2307350_640.png'
const Portfolio = (props) => {
  console.log('props', props);
  return(
    <>
      <Divider hidden />
      <Container>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={16} >
              <Card.Group fluid='true' centered>
                <Card className='transparent-card'>
                  <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={defaultProjectAvatar}
                  />
                  <Card.Header>Flati // Life</Card.Header>
                  <Card.Description>
                    <p>Social Network for Flatiron Students curating projects and
                    student experiences which aims to help new students survive bootcamp.</p>
                    <p>- Developed the backend on Ruby on Rails with validations, strong params,
                    bcrypt gem to encrypt the user password</p>
                    <p>- Used PostgreSQL for the database and developed RESTful API.</p>
                    <p>- Designed and constructed the Frontend UI using React, with Semantic-UI-React for styling, with custom CSS.</p>
                  </Card.Description>
                  <Card.Meta>

                  </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <a href='https://github.com/jdromero88/flati-life-backend' target='_blank' rel='noopener noreferrer'>
                      <Icon name='github' />
                      Repository: Flati//Life Back End
                    </a>
                  </Card.Content>
                  <Card.Content extra>
                    <a href='https://github.com/jdromero88/flati-life-frontend' target='_blank' rel='noopener noreferrer'>
                      <Icon name='github' />
                      Repository: Flati//Life Front End
                    </a>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={defaultProjectAvatar}
                  />
                  <Card.Header>Sports Buddy</Card.Header>
                  <Card.Description>
                    <p>An app that helps the user connect with people in their area to play sports.</p>
                    <p>- Ruby on Rails as a backend using strong params, validations and gem bcrypt to encrypt the password.</p>
                    <p>- Used PostgreSQL for the database and developed RESTful API.</p>
                    <p>- Implemented Semantics UI for styling.</p>
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href='https://github.com/jdromero88/Sports-Buddy' target='_blank' rel='noopener noreferrer'>
                      <Icon name='github' />
                      Repository: Sports Buddy
                    </a>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={defaultProjectAvatar}
                  />
                  <Card.Header>Vapor</Card.Header>
                  <Card.Description>
                    <p>A program that allows the user to create a collection of games that they want to buy or already own.</p>
                    <p>- Constructed a Rails API backend with endpoints for Users, Games, OwnedGames.</p>
                    <p>- Utilized RAWG Video Games Database API to pull and parse data of the games.</p>
                    <p>- Applied UI employing React, with Semantic-React for styling.</p>
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href='https://github.com/jdromero88/vapor-back-end' target='_blank' rel='noopener noreferrer'>
                      <Icon name='github' />
                      Repository: Vapor Back End
                    </a>
                  </Card.Content>
                  <Card.Content extra>
                    <a href='https://github.com/jdromero88/vapor-front-end' target='_blank' rel='noopener noreferrer'>
                      <Icon name='github' />
                      Repository: Vapor Front End
                    </a>
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
