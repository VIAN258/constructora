import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  { Nav, Navbar } from 'react-bootstrap'

function Navbarboos() {
  return (
    <div className="App">
        <Navbar bg= "dark" variant="dark" sticky="top" expand="md">
            <Navbar.Brand>
              Contructora PINO 
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav>
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="about">About Us</Nav.Link>
                <Nav.Link href="Features">Features</Nav.Link>
                <Nav.Link href="team">Team</Nav.Link>
                <Nav.Link href="gallery">Gallery</Nav.Link>
                <Nav.Link href="contact">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Navbarboos