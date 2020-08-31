import React from 'react'
import Navbar from '../components/Navbar'
// import {Divider} from 'semantic-ui-react'
const Header = (props) => {
  return(
    <Navbar language={props.language}/>
  )
}
export default Header
