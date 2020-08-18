import React from 'react'
import Relocate from './Relocate'
import joseRomero from '../assets/joseromero.jpg'
// Import Swiper React components

const slidess = {
  uno: `<SwiperSlide key='slide-1'>
          <div className="columns my-6">
            <div className="column is-two-fifths mt-6">
              <figure className='image'>
                <img src={joseRomero} alt='José Romero'/>
              </figure>
              <Relocate />
            </div>
            <div className="column mt-6">
              <h1 className="title is-1">Mercury Products</h1>
              <p className="subtitle is-4">
                Mercury Products website.
              </p>
            </div>
          </div>
        </SwiperSlide>`,
  dos:  `<SwiperSlide key='slide-2'>
          <div className="columns my-6">
            <div className="column is-two-fifths mt-6">
              <figure className='image'>
                <img src={joseRomero} alt='José Romero'/>
              </figure>
              <Relocate />
            </div>
            <div className="column mt-6">
              <h1 className="title is-1">Flati'//Life</h1>
              <p className="subtitle is-4">
                Flati'//Life. Github | Website
              </p>
            </div>
          </div>
        </SwiperSlide>`,
  tres: '',
}

export default slidess
