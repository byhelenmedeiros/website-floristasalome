import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const CustomNavbar = () => {
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
    <BootstrapNavbar bg="primary" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            // src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Salomeflorista"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar">
            <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-link">Sobre nós</Nav.Link>
            <Nav.Link as={Link} to="/services" className="navbar-link">Serviços</Nav.Link>
            <Nav.Link as={Link} to="/products" className="navbar-link">Produtos</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="navbar-link">Entre em contato</Nav.Link>
          </Nav>
          <Form inline="true" className="ml-auto">
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
              <FontAwesomeIcon
                icon={faSearch}
                className={`search-icon ${showSearch ? 'icon-visible' : ''}`}
                onClick={handleSearchClick}
              />
            </div>
          </Form>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
