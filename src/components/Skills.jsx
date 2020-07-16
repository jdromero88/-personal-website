import React from 'react'
import { Grid, Accordion, Icon,
  Button, Header, Segment, TransitionablePortal} from 'semantic-ui-react'

class Skills extends React.Component {
  // state = { activeIndex: 0,
  //   open: false,
  //  }
  state = { open: true,
   }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex, open: !this.state.open })
  }
  handleClose = () => this.setState({ open: false })

  render(){
    const { activeIndex } = this.state
    return(
      <Grid verticalAlign='middle' centered>
        <Grid.Row>
          <Grid.Column>
            <Button
              content={this.state.open ? 'Hide Skills' : 'Show Skills'}
              negative={this.state.open}
              positive={!this.state.open}
              onClick={this.handleClick}
            />
            <TransitionablePortal onClose={this.handleClose}
              open={this.state.open}>
              <Segment
                style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
              >
                <Header>Technical Skills</Header>
                  <p>
                    Ruby, Ruby on Rails, JavaScript(vanilla)(ES6), ReactJS, Redux,
                    HTML5, CSS, PostgreSQL, sqlLite, MVC, RESTful architecture,
                  </p>
                  <p>Linux, APIs, Wordpress.</p>
                  <p>Bootstrap, Semantic UI, Bulma.</p>
              </Segment>
            </TransitionablePortal>
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
                  HTML5, CSS, PostgreSQL, sqlLite, Bootstrap, Semantic UI, Bulma,
                  Linux, MVC, RESTful architecture, APIs, Wordpress.
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
                  GitHub, Adobe Photoshop, Adobe Premiere, KDenlive, MS Office, wamp, filezilla, phpMyAdmin.
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
