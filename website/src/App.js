import React from 'react';
import 'popper.js';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import CustomNavbar from './components/Navbar/Navbar';
import CustomCarousel from './components/Carousel/Carousel';
import './css/custom.css'; 
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <CustomCarousel />
        <Routes />
        <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
      </div>
    </Router>
  );
}

export default App;
