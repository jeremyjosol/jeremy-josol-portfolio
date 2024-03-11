import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BsAsterisk } from "react-icons/bs";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className='logo' as={Link} to="/">
        jeremyjosol <BsAsterisk className='asterisk' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto justify-content-end">
        <Nav>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;