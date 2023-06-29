import React from 'react';
import CustomNavbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import './Home.css';

const Home = () => {
  return (
    <>
      <CustomNavbar />
      {/* Conteúdo da página Home */}
      <Carousel />
    </>
  );
};

export default Home;
