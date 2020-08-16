import React from 'react'
import Moment from 'moment'
const currentDate = new Date()
const FooterContent = () => {
  return(
    <footer className="footer">
      <div className='container'>
        <div className="content has-text-centered">
          <p><a href='https://github.com/jdromero88'>
            <span className="icon is-large">
              <i className="fab fa-github"></i>
            </span>
            Follow on GitHub</a></p>
          <p><a href='https://github.com/jdromero88'>
            <span className="icon is-large">
              <i className="fab fa-linkedin-in"></i>
            </span>
            Add on LinkedIn</a></p>
          <p><a href='https://github.com/jdromero88'>
            <span className="icon is-large">
              <i className="fab fa-twitter"></i>
            </span>
            Follow on Twitter</a></p>
          <p><a href='https://github.com/jdromero88'>
            <span className="icon is-large">
              <i className="fas fa-envelope"></i>
            </span>
            Send me an email</a></p>
          <p>José Romero © {Moment(currentDate).format('YYYY') }</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent
