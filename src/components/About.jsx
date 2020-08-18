import React from 'react'
// import {Container, Header, Grid, Image, Flag} from 'semantic-ui-react'
import joseRomero from '../assets/jose romero.jpg'
import Relocate from './Relocate'
const About = () => {
  return(
    <div className="columns my-6">
      <div className="column is-two-fifths mt-6">
        <figure className='image'>
          <img src={joseRomero} alt='José Romero'/>
        </figure>
        <Relocate />
      </div>
      <div className="column mt-6">
        <h1 className="title is-1">José  Romero</h1>
        <p className="subtitle is-4">
          I was born and raised in <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/San_Ignacio,_Paraguay'>San Ignacio Guazú</a>,
          Misiones, Paraguay, in the heart of South America.
          I developed a passion early on for computers and everything about them.
          This is what led me to study Computer Engineering at the Universidad Católica.
        </p>
        <p className="subtitle is-4">
          I moved to Washington DC in January of 2016. After years of rising through
          the ranks at Chipotle I decided to take the plunge and go back to what I loved.
          That is when I enrolled at Flatiron School to study Software Engineering.
          I finished the program in February 2020 and I am excited to put my new skills into action.
        </p>
        <p className="subtitle is-4">
          In my free time I love to spend time with friends and family. I play basketball,
          soccer (or fútbol as its called everywhere else in the world), ping pong and video games.
        </p>
        <p className="title">
          Fun fact about me:
        </p>
        <p className="subtitle is-4">
          I was born in August 1988 under a <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Alfredo_Stroessner'>dictatorship</a>.
          However, it only lasted 6 more months.
          By February 1989 the dictator had been overthrown.
        </p>
      </div>
    </div>
  )
}

export default About
