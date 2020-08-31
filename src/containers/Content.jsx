import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Skills from '../components/Skills'
import Header from './Header'
import Footer from './Footer'
import Sitemap from '../components/Sitemap'
const Content = (props) => {
  return(
    <>
    <Header language={props.language}/>
    <div className="container mt-6">
      <Switch>
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/sitemap' component={Sitemap} />
        <Route path='/' component={Home} />
      </Switch>
      <Skills />
    </div>
    <Footer/>
    </>
  )
}
export default Content
