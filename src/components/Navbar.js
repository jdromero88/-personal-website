import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Sticky } from 'semantic-ui-react'
class Navbar extends React.Component{
  render(){
    return(
      <Sticky>
        <Menu stackable>
          <NavLink to='/' className='item'>Home</NavLink>
          <NavLink to='/portfolio' className='item'>Portfolio</NavLink>
          <NavLink to='/about' className='item'>About</NavLink>
          <NavLink to='/education' className='item'>Education</NavLink>
          <NavLink to='/skills' className='item'>Skills</NavLink>
          <NavLink to='/contact' className='item'>Contact</NavLink>
        </Menu>
      </Sticky>
    )
  }
}

export default Navbar
