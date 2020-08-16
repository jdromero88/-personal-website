import React from 'react'
// import {Container, Header, Grid, Image} from 'semantic-ui-react'
import joseRomero from '../assets/joseromero.jpg'
const Home = () => {
  return(
    <div className='container'>
      <div className="columns">
        <div className="column is-two-fifths">
          <img src={joseRomero} alt='José Romero'/>
        </div>
        <div className="column">
          <h1 className="title is-1">José  Romero</h1>
          <p className="subtitle is-3">Full-Stack developer with a passion for developing of all types, and sizes.</p>
          <p className="subtitle is-3">>With experience in Ruby on Rails, JavaScript, and React and a background in
            Computer Engineering.</p>
          <p className="subtitle is-3">I have vast experience teams and creating an environment that encourages extraordinary results.</p>
          <p className="subtitle is-3">Dependable and always willing to take on any task and learn something new.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
