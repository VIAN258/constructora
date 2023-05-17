import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  { Nav, Navbar } from 'react-bootstrap'

function Navbarboos() {
  return (
    <div className="App">
        <Navbar bg= "light" variant="dark" sticky="top" expand="sm" collapsedOnSelect>
            <Navbar.Brand className="text-dark">
              Contructora PINO 
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav>
                <Nav.Link href="home" className="text-dark">Home</Nav.Link>
                <Nav.Link href="about" className="text-dark">About Us</Nav.Link>
                <Nav.Link href="features" className="text-dark">Features</Nav.Link>
                <Nav.Link href="team" className="text-dark">Team</Nav.Link>
                <Nav.Link href="gallery" className="text-dark">Gallery</Nav.Link>
                <Nav.Link href="contact" className="text-dark">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Navbarboos