import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import Header from './Header'
import Footer from './Footer'
import ResumePDF from '../assets/Jose-Romero-resume.pdf'
// import Contact from '../components/Contact'
const Content = () => {
  return(
    <>
    <Header/>
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
    <Footer/>
    </>
  )
}
export default Content
