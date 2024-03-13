import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { BsAsterisk } from "react-icons/bs";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        window.scrollTo({
          behavior: 'smooth',
          top: contactSection.offsetTop,
        });
      }
    }, 100);
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand className='logo' as={NavLink} to="/">
        jeremyjosol <BsAsterisk className='asterisk' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto justify-content-end">
        <Nav>
          <Nav.Link as={NavLink} to='/' exact='true'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/about' >About</Nav.Link>
          <Nav.Link onClick={handleContactClick}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
