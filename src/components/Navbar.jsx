import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { Menu, Container, Icon } from 'semantic-ui-react'
class Navbar extends React.Component{
  render(){
    return(
      <Container>
        <Menu secondary stackable>
          <Menu.Item>
            <Link to='/'>
              <Icon name='code' color='black'/>
            </Link>
          </Menu.Item>
          <NavLink to='/' className='item'>Home</NavLink>
          <NavLink to='/portfolio' className='item'>Portfolio</NavLink>
          <NavLink to='/about' className='item'>About</NavLink>
          <NavLink to='/education' className='item'>Education</NavLink>
          <NavLink to='/skills' className='item'>Skills</NavLink>
          <NavLink to='/resume' className='item'>Resume</NavLink>
        </Menu>
      </Container>
    )
  }
}

export default Navbar
