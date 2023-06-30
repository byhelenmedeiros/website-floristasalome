import React from 'react';
import CustomCarousel from '../../components/Carousel/Carousel';
import FlowerCards from '../../components/Cards/Cards';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
    
      {/* Conteúdo da página Home */}
      {isHomePage && <CustomCarousel showCarrossel={true} />}
      {isHomePage && <FlowerCards showFlowerCards={true} />}
    </>
  );
};

export default Home;
