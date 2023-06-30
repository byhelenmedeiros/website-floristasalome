import React from 'react';
import { Card } from 'react-bootstrap';
import flower1 from '../../images/flower1.png';
import flower2 from '../../images/flower2.png';
import flower3 from '../../images/flower3.png';
import './Cards.css';

const FlowerCards = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="flower-card">
        <Card.Img variant="top" src={flower1} />
        <Card.Body>
          <Card.Title>Título do Card 1</Card.Title>
        </Card.Body>
      </Card>
      <Card className="flower-card">
        <Card.Img variant="top" src={flower2} />
        <Card.Body>
          <Card.Title>Título do Card 2</Card.Title>
        </Card.Body>
      </Card>
      <Card className="flower-card">
        <Card.Img variant="top" src={flower3} />
        <Card.Body>
          <Card.Title>Título do Card 3</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FlowerCards;
