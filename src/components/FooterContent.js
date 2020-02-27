import React from 'react'
import Moment from 'moment'
import { Container, Icon,
  Divider, Grid, List, Image,
  Header, Segment } from 'semantic-ui-react'
const currentDate = new Date()
const FooterContent = () => {
  return(
    <Container>
      <Divider />
      <Segment basic textAlign='center'>
      <List horizontal relaxed>
        <List.Item>
          <List.Content>
          <List.Header as='a' href='https://github.com/jdromero88' target='_blank'>
          <Icon.Group size='large' color='black'>
            <Icon name='github' size='large' color='black'/>
            <Icon corner name='add' size='large' color='black'/>
          </Icon.Group>
          Follow on GitHub</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
          <List.Header as='a' href='https://www.linkedin.com/in/josedromero' target='_blank'>
          <Icon.Group size='large'>
            <Icon name='linkedin' size='large'color='black'/>
            <Icon corner name='add' size='large' color='black'/>
          </Icon.Group>
          Add on LinkedIn</List.Header>
          </List.Content>
        </List.Item>
      </List>

      </Segment>
      <Segment textAlign='center'>
      <p>Jose D Romero © {Moment(currentDate).format('YYYY') }</p>
      </Segment>
    </Container>
  )
}

export default FooterContent
