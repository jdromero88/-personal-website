import React from 'react';
import { NavLink, Link } from 'react-router-dom'
// import { Menu, Container, Icon } from 'semantic-ui-react'
class Navbar extends React.Component{
  render(){
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }

    });    
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo'/>
          </a>

          <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href='/'>
              Home
            </a>

            <a className="navbar-item" href='/portfolio'>
              Portfolio
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <button className="navbar-link" href=''>
                About
              </button>

              <div className="navbar-dropdown">
                <a className="navbar-item" href='/about'>
                  About
                </a>
                <a className="navbar-item" href='/education'>
                  Education
                </a>
                <a className="navbar-item" href='/skills'>
                  Skills
                </a>
                <a className="navbar-item" href='/resume'>
                  Resume
                </a>
              </div>
            </div>
            <a className="navbar-item" href='/contact'>
              Contact
            </a>
          </div>

        </div>
      </nav>
    )
  }
}

export default Navbar
