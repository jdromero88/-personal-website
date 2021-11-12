import React from 'react'
import Relocate from './Relocate'
import Carousel from '../containers/Carousel'
import CarouselProjects from '../containers/CarouselProjects'
// import joseRomero from '../assets/joseromero.jpg'
const Portfolio = () => {
  return(
    <React.Fragment>
      <p className="title is-1 has-text-centered pt-4">Projects</p>
      <CarouselProjects />
      <p className="title is-1 has-text-centered mt-6 pt-6">Websites</p>
      <Carousel />
      <Relocate />
    </React.Fragment>
  )
}

export default Portfolio
