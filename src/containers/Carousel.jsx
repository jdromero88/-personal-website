import React from 'react'
import mp from '../assets/mercury-products.jpg'
import fl from '../assets/flatilife.jpg'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Carousel extends React.Component {
  render(){
    return(
      <Swiper
        autoplay={{delay: 1000}}
        speed={800}
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="columns mt-6">
            <div className="column is-half">
              <figure className='image'>
                <img src={mp} alt='Mercury Products logo'/>
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-1">Mercury Products</h1>
              <p className="subtitle is-4 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://mercuryproducts.net">Website. <i class="fas fa-external-link-alt"></i></a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="columns mt-6">
            <div className="column is-half">
              <figure className='image'>
                <img src={fl} alt='Flati Life'/>
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-1">Flati//Life</h1>
              <p className="subtitle is-4 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://josedromero.com/redirect/redirect.html?url=https://powerful-reaches-20836.herokuapp.com/">Live demo. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-4">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/flati-life-backend">Github Back end. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-4">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/flati-life-frontend">Github Front end. <i class="fas fa-external-link-alt"></i></a>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    )
  }
}

export default Carousel
