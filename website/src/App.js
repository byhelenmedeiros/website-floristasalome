import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from './Routes';
import CustomNavbar from './components/Navbar/Navbar';
import CustomCarousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <Routes />
    </div>
  );
}

export default App;
