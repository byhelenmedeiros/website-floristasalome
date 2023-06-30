import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import CustomNavbar from './components/Navbar/Navbar';
import CustomCarousel from './components/Carousel/Carousel';
import './sass/custom.css';
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <CustomCarousel />
        <Routes />
        
      </div>
    </Router>
  );
}

export default App;
