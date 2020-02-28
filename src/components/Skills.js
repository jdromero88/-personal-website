import React from 'react'
import { Grid, Accordion, Icon } from 'semantic-ui-react'

class Skills extends React.Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render(){
    const { activeIndex } = this.state
    return(
      <Grid verticalAlign='middle' centered>
        <Grid.Row>
          <Grid.Column>
            <Accordion fluid styled>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Technical Skills
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  Ruby, Ruby on Rails, JavaScript(vanilla)(ES6), ReactJS, Redux,
                  HTML5, CSS, PostgreSQL, sqlLite, Bootstrap, Semantic UI,
                  Linux, MVC, RESTful architecture, APIs.
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Some extra tools
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  GitHub, Adobe Photoshop, wamp, filezilla, phpMyAdmin.
                </p>
              </Accordion.Content>
            </Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Skills
