import React from 'react';
import { Card } from 'react-bootstrap';
import flower1 from '../../images/flower1.png';
import flower3 from '../../images/flower3.png';
import './Cards.css';

const FlowerCards = () => {
  return (
    <div className="card-container">
      <Card className="card">
        <div className="card__content">
          <Card.Img variant="top" src={flower1} className="card__image" />
          <Card.Body className="card__body">
            <Card.Title className="card__title">Arranjos</Card.Title>
            <Card.Subtitle className="card__title card__subtitle">Subtítulo do Card</Card.Subtitle>

          </Card.Body>
        </div>
      </Card>
      <Card className="card">
        <div className="card__content">
          <Card.Img variant="top" src={flower3} className="card__image" />
          <Card.Body className="card__body">
            <Card.Title className="card__title">Vasos</Card.Title>
            <Card.Subtitle className="card__title card__subtitle">Subtítulo do Card</Card.Subtitle>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default FlowerCards;
