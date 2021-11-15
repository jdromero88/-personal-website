import React from 'react'
import mp from '../assets/mercury-products.jpg'
import fl from '../assets/flatilife.jpg'
import bromble from '../assets/bromble.jpg'
import vapor from '../assets/vapor.jpg'
import kj from '../assets/kandj.jpg'
// import Swiper core and required components
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);

class Carousel extends React.Component {
  render(){
    return(
      <Swiper
        autoplay={{delay: 6000}}
        speed={800}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="columns mt-6">
            <div className="column is-half">
              <figure className='image'>
                <img src={mp} alt='Mercury Products website'/>
              </figure>
            </div>
            <div className="column">
              <h1 className="title">Mercury Products</h1>
              <p className="subtitle is-6 mt-3">
                Developed Mercury Products website | Volunteer position through United Nations Volunteers
                <a target="_blank" rel="noopener noreferrer" href='https://www.onlinevolunteering.org/en'>(UNV)</a> programme.
              </p>
              <p className="subtitle is-6 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://josedromero.com/mp">Website. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                Developed with:
              </p>
              <div class="tags">
                <span class="tag is-success">HTML</span><span class="tag is-success">JavaScript</span><span class="tag is-success">Bulma | SASS</span>
                <span class="tag is-success"><i class="far fa-heart"></i></span>
              </div>
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
              <h1 className="title">Flati//Life</h1>
              <p className="subtitle is-6 mt-3">
                This is a space to link up with Flatiron students new and old.
              </p>
              <p className="subtitle is-6">
                Connect with current students and alumni to expand your network.
                Exhibit your projects and see what others are working on.
                Give feedback, share ideas and provide moral support.
              </p>
              <p className="subtitle is-6 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://josedromero.com/redirect/redirect.html?url=https://powerful-reaches-20836.herokuapp.com/">Live demo. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/flati-life-backend">Github Back end. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/flati-life-frontend">Github Front end. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                Developed with:
              </p>
              <div class="tags">
                <span class="tag is-success">React</span><span class="tag is-success">Redux</span><span class="tag is-success">Ruby on Rails</span><span class="tag is-success">PostgreSQL</span>
                <span class="tag is-success">Semantic-UI</span><span class="tag is-success"><i class="far fa-heart"></i></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="columns mt-6">
            <div className="column is-half">
              <figure className='image'>
                <img src={vapor} alt='Vapor app'/>
              </figure>
            </div>
            <div className="column">
              <h1 className="title">Vapor</h1>
              <p className="subtitle is-6 mt-3">
                App that allows users to create a collection of games that they want to buy or already own.
              </p>
              <p className="subtitle is-6 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/vapor-back-end">Github Back end. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/vapor-front-end">Github Front end. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                Developed with:
              </p>
              <div class="tags">
                <span class="tag is-success">React</span><span class="tag is-success">Ruby on Rails</span><span class="tag is-success">PostgreSQL</span>
                <span class="tag is-success">Semantic-UI</span><span class="tag is-success"><i class="far fa-heart"></i></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="columns mt-6">
            <div className="column is-half">
              <figure className='image'>
                <img src={bromble} alt='Bromble website'/>
              </figure>
            </div>
            <div className="column">
              <h1 className="title">Bromble</h1>
              <p className="subtitle is-6 mt-3">
                Former Sporst Buddy now Bromble is a Single Page Application that helps users connect with people in their area to play sports.
              </p>
              <p className="subtitle is-6 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/Sports-Buddy/tree/master/Back-End/sports-buddy-api">Github Back end. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jdromero88/Sports-Buddy/tree/master/Front-End">Github Front end. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                Developed with:
              </p>
              <div class="tags">
                <span class="tag is-success">Vanilla JavaScript</span><span class="tag is-success">HTML</span><span class="tag is-success">PostgreSQL</span>
                <span class="tag is-success">Semantic-UI</span><span class="tag is-success"><i class="far fa-heart"></i></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="columns mt-6">
            <div className="column is-half">
              <figure className='image'>
                <img src={kj} alt='Kelley and José wedding website'/>
              </figure>
            </div>
            <div className="column">
              <h1 className="title">Wedding Website</h1>
                <p className="subtitle is-6 mt-3">
                  Kelley and José wedding website.
                </p>
              <p className="subtitle is-6 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://josedromero.com/kelleyandjose/index.php">Website. <i class="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                Developed with:
              </p>
              <div class="tags">
                <span class="tag is-success">HTML</span><span class="tag is-success">Bootstrap</span><span class="tag is-success">+Custom CSS</span><span class="tag is-success">PHP</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    )
  }
}

export default Carousel
