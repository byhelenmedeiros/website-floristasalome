import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons'

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

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
              <Nav.Link as={Link} to="/services">Serviços</Nav.Link>
              <Nav.Link as={Link} to="/products">Produtos</Nav.Link>
              <Nav.Link as={Link} to="/contact">Entre em contato</Nav.Link>
              <Nav.Link as={Button} variant="light" onClick={handleSearchClick}>
                <Search />
              </Nav.Link>
            </Nav>
            {showSearch && (
              <Form inline>
                <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                <Button variant="outline-light">Buscar</Button>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
