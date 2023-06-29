import React from 'react';
import NavbarComponent from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel';
import './Home.css';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      {/* Conteúdo da página Home */}
      <Carousel />
    </>
  );
};

export default Home;
