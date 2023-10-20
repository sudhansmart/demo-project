import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faHome } from '@fortawesome/free-solid-svg-icons';
import{Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='header'>
         <img class="logo" src="./src/assets/images/logohead.png" alt="Your Logo"></img>
         <div>
            <h1 className='header-title'>TN Government</h1>
            </div>
    </div>
     <Navbar expand="lg" className="Navbar">
      <Container >
        <Navbar.Brand as={Link} to="/"><FontAwesomeIcon icon={faHome} style={{touchAction:"manipulation"}}/><span className='Nav-Text'> Home</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <NavDropdown  title="Masters" id="basic-nav-dropdown" >
            <NavDropdown.Item  as={Link} to="/Application">New Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Designation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Department</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Grievance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mode </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Priority</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Received From </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Send To</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Status</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Type</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faArrowRightFromBracket}/><span className='Nav-Text' >Logout</span> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  )
}

export default Header