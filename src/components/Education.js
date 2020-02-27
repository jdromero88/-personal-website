import React from 'react'
import {Container, Item} from 'semantic-ui-react'
import flatironLogo from '../assets/flatiron-school-logo.png'
import ucaLogo from '../assets/Catolica-LOGO.png'
const Education = () => {
  return(
    <Container fluid>
      <Item.Group>
        <Item>
          <Item.Image size='small' src={flatironLogo} />

          <Item.Content verticalAlign='middle'>
            <Item.Header>Flatiron School</Item.Header>
            <Item.Meta>
              <span className='price'>Software Engineering</span>
              <span className='stay'>February 2020</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
      <Item.Group>
        <Item>
          <Item.Image size='small' src={ucaLogo} />
          <Item.Content verticalAlign='middle'>
            <Item.Header>Universidad Católica Nuestra Señora de la Asunción Campus Itapúa Sub Campus San Ignacio</Item.Header>
            <Item.Meta>
              <span className='price'>Graduated as Técnico Superior en Informática (Computer Technician)</span>
              <span className='stay'>December 2009</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  )
}

export default Education
