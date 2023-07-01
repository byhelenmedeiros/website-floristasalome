import React from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';
import { Button, Carousel } from 'react-bootstrap';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';

function CustomCarousel() {


  return (
    <div className="custom-carousel">
      <Carousel>
        {/* Slides do carrossel */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Flores pra si"
          />
          <Carousel.Caption>
            <h3 className="titulo__carousel">Arranjos com até 20% de desconto! Por tempo limitado.</h3>
            <p className="subtitulo  md-none">Cada arranjo é uma verdadeira obra de arte floral, feita com dedicação e carinho para tornar os seus momentos ainda mais memoráveis. Surpreenda quem ama com delicadeza e charme!</p>
            <Link to="/products">
              <Button variant="secondary" className="text-left md-none md-flex justify-content-center">
                Nossos produtos
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="titulo__carousel titulo__carousel_2 ">Presentes floridos para todas as ocasiões!</h3>
            <p className="subtitulo subtitulo_2  md-d-none">Surpreenda quem ama com delicadeza e charme. Cada arranjo é uma verdadeira obra de arte floral, feita com dedicação e carinho para tornar os seus momentos ainda mais memoráveis.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="titulo__carousel titulo__carousel_2">Encontre as flores perfeitas para todas as ocasiões.</h3>
            <p className="subtitulo subtitulo_2 md-d-none">Seja para presentear alguém especial, decorar um evento ou trazer vida aos seus espaços, temos opções encantadoras que vão surpreender e encantar.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
