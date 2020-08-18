import React from 'react'
import Relocate from './Relocate'
import joseRomero from '../assets/joseromero.jpg'
const Portfolio = (props) => {
  return(
    <div className="columns my-6">
      <div className="column is-two-fifths mt-6">
        <figure className='image'>
          <img src={joseRomero} alt='Project Picture'/>
        </figure>
        <Relocate />
      </div>
      <div className="column mt-6">
        <h1 className="title is-1">Project Name</h1>
        <p className="subtitle is-4">
          Here goes project
        </p>
      </div>
    </div>
  )
}

export default Portfolio
