import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
import './Home.css';

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setSearchTerm('');
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('Pesquisar:', searchTerm); // Substitua pelo código de pesquisa adequado
    }
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
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">Sobre nós</Nav.Link>
              <Nav.Link as={Link} to="/services">Serviços</Nav.Link>
              <Nav.Link as={Link} to="/products">Produtos</Nav.Link>
              <Nav.Link as={Link} to="/contact">Entre em contato</Nav.Link>
            </Nav>
            <Form inline className="ml-auto">
              <div className="search-form-container">
                <div className={`search-form ${showSearch ? 'active' : ''}`}>
                  <FormControl
                    type="text"
                    placeholder="Pesquisar"
                    className="mr-sm-2"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <FontAwesomeIcon icon={faSearch} className={`search-icon ${showSearch ? 'icon-visible' : ''}`} onClick={handleSearchClick} />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
