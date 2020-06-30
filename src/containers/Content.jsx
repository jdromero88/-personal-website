import React from 'react'
import { Route, Switch} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
// import Contact from '../components/Contact'
const Content = () => {
  return(
    <Container>
      <Switch>
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/skills' component={Skills} />
        <Route path='/' component={Home} />
      </Switch>
    </Container>
  )
}
export default Content
