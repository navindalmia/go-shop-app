import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', borderBottom: '1px solid #e0e0e0', padding: '10px 0' }}>
      

      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Go-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Shop By Category</Nav.Link>
              <Nav.Link href="#link">Brands</Nav.Link>
              <Nav.Link href="#link">Offers</Nav.Link>
              <Nav.Link href="#link">Sale</Nav.Link>
              <NavDropdown title="My Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Stores</Nav.Link>
              <Nav.Link href="#link">Help</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#link">Wishlist</Nav.Link>
              <Nav.Link href="#link">Bag</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
