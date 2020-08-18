import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Skills from '../components/Skills'
import Header from './Header'
import Footer from './Footer'
const Content = () => {
  return(
    <>
    <Header/>
    <div className="container">
      <Switch>
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
      <Skills />
    </div>
    <Footer/>
    </>
  )
}
export default Content
