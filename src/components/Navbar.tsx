import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" id="menu">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/Imagenes/Icono.png"
            alt="Logo"
            className="navbar-logo-pequeno" 
            style={{ marginRight: '10px' }} 
          />
          DentiSalud
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Servicios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contactUs">
              Contáctenos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
