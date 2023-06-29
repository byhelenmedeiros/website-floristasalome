import React from 'react';
import CustomNavbar from '../../components/Navbar/Navbar';
import CustomCarousel from '../../components/Carousel/Carousel';
import './Home.css';

const Home = () => {
  return (
    <>
      <CustomNavbar />
      {/* Conteúdo da página Home */}
      <CustomCarousel />
    </>
  );
};

export default Home;
