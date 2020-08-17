import React from 'react'
import Moment from 'moment'
const currentDate = new Date()
const FooterContent = () => {
  return(
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">
            <div className="level">
              <div className="level-item">
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/jdromero88'><span className="icon is-large">
                  <i className="fab fa-github fa-lg"></i>
                </span></a>
                <p><a target="_blank" rel="noopener noreferrer" href='https://github.com/jdromero88'>
                  Github</a></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="level">
              <div className="level-item">
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/josedromero'><span className="icon is-large">
                  <i className="fab fa-linkedin fa-lg"></i>
                </span></a>
                <p><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/josedromero'>
                  Linkedin</a></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="level">
              <div className="level-item">
                <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/jodarove'><span className="icon is-large">
                  <i className="fab fa-twitter fa-lg"></i>
                </span></a>
                <p><a target="_blank" rel="noopener noreferrer" href='https://twitter.com/jodarove'>
                  Twitter</a></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="level">
              <div className="level-item">
                <a target="_blank" rel="noopener noreferrer" href='mailto:jr@josedromero.com'>
                  <span className="icon is-large">
                    <i className="fas fa-envelope fa-lg"></i>
                  </span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='mailto:jr@josedromero.com'>
                  <p>Email me</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>José Romero © {Moment(currentDate).format('YYYY') }</p>
      </div>
    </footer>
  )
}

export default FooterContent
