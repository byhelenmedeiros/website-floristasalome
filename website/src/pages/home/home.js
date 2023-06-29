import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import logo from './logo.png'; 

const Home = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              // src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Salomeflorista"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">Sobre nós</Nav.Link>
              <Nav.Link as={Link} to="/services">Nossos serviços</Nav.Link>
              <Nav.Link as={Link} to="/Products">Produtos</Nav.Link>
              <Nav.Link as={Link} to="/contact">Entre em contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
