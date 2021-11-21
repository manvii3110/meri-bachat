import React from 'react';
import {Navbar, Nav, NavDropdown, Container, Form, FormControl, Button} from 'react-bootstrap';
import '../App.css'

function Navbar1() {
    return (
      
     <Navbar className="nav1" variant="dark" expand="lg">
  <Container >
  <Navbar.Brand className="brand">MeriBachat</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto ">
      
      <NavDropdown className="dropdown-item" id="basic-nav-dropdown" title="Locate Nearby" >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="dropdown-item" id="basic-nav-dropdown" title="Gift Cards" >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="dropdown-item" id="basic-nav-dropdown" title="Earn Cashback">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
   </Nav>
    <Form className="d-flex Search1">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{width:'180px', borderRadius:'25px'}}
          
        />
        <Button className="Search-icon"></Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default Navbar1;
