import React from 'react'
import Relocate from './Relocate'
import joseRomero from '../assets/joseromero.jpg'
const Home = () => {
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
          Full-Stack Web Developer with a passion for creating apps that solve
          problems and make people’s lives easier.
        </p>
        <p className="subtitle is-4">
          Experienced in Ruby, Ruby on Rails, JavaScript, ReactJS, Redux with
          a background in Computer Engineering.
        </p>
        <p className="subtitle is-4">
          Previous work experience as a Manager in the food service industry
          and as Computer Technician. I will also bring strong skills in team-building,
          employee training, customer service, team management, and creating working
          environments that encourage extraordinary results. Dependable, detail oriented,
          proficient multitasker and always willing to take on any task and learn something new.
        </p>
        <p className="subtitle is-4">
          Dependable and always willing to take on
          any task and learn something new.
        </p>
        <p className="subtitle is-4">
          Conversational fluency in Spanish and Guarani.
        </p>
      </div>
    </div>
  )
}

export default Home
