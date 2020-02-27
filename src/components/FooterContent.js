import React from 'react'
import Moment from 'moment'
import { Container,
  Divider,
  Grid,
  Header,
  List,} from 'semantic-ui-react'
const currentDate = new Date()
const FooterContent = () => {
  return(
    <React.Fragment>
    <footer vertical style={{ padding: '5em 0em', backgroundColor: '#282c34'}}>
          <Container textAlign='center'>
            <Grid divided  stackable>
              <Grid.Column width={3}>
                <Header  as='h4' content='Social Media' />
                <List link>
                  <List.Item as='a' target='_blank' href='https://github.com/jdromero88'>Github</List.Item>
                  <List.Item as='a' target='_blank' href='https://www.linkedin.com/in/josedromero'>Linkedin</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header  as='h4' content='More Links' />
                <List link >
                  <List.Item as='a' target='_blank' href='https://medium.com/@jdromero88'>Medium</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header  as='h4' content='Useful links' />
                <List link>
                  <List.Item as='a' target='_blank' href='https://flatironschool.com/'>FlatironSchool.com</List.Item>
                  <List.Item as='a' target='_blank' href='https://flatironschool.com/blog'>FlarironSchool.com/blog</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h4' content='Jose D Romero' />
                <p>
                  Full-Stack developer with a passion for developing of all types, and sizes. With experience in Ruby on Rails, JavaScript, and React and a background in Computer Engineering. Strong teamwork skills, having worked at entry level to management. I have vast experience teams and creating an environment that encourages extraordinary results. Dependable and always willing to take on any task and learn something new.
                </p>
              </Grid.Column>
            </Grid>
            <Divider section />
            <p>Jose D Romero © {Moment(currentDate).format('YYYY') }</p>
          </Container>
        </footer>
    </React.Fragment>
  )
}

export default FooterContent
