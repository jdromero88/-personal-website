import React from 'react'
import Relocate from '../components/Relocate'
import slidess from '../components/Slides'
import joseRomero from '../assets/joseromero.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {EffectFade, Navigation, Pagination} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

const slides = [];
for (let i = 0; i < 5; i++) {
  slides.push(
    <SwiperSlide key={`slide-${i}`}>
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
            Mercury Products website. Github |
          </p>
        </div>
      </div>
    </SwiperSlide>
  )
}
console.log(slidess);

class Carousel extends React.Component {
  render(){
    return(
      <>
        <Swiper id="main" tag="section" wrapperTag="ul" navigation pagination>
          {slides}
        </Swiper>
      </>
    )
  }
}

export default Carousel
