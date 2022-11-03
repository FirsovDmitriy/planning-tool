import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import IconCircle from './IconCircle'

const TheHeader = () => {
  console.log('h');
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <div className='logo'>
            <IconCircle />
            <span className='logo__text'>Trello Clone</span>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className='me-auto'>
            <Nav.Link>Home</Nav.Link>
            {/* <Nav.Link>workspace</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TheHeader
