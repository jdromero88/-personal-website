import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
// import Contact from '../components/Contact'
const Content = () => {
  return(
    <div class="container">
      <Switch>
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/resume' component={Resume} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  )
}
export default Content
