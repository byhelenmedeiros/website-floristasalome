import React from 'react';
import { Card } from 'react-bootstrap';
import flowerImage from 'caminho/para/imagem.png';

const FlowerCard = () => {
  return (
    <Card style={{ borderRadius: '20px' }}>
      <div className="d-flex">
        <Card.Img variant="top" src={flowerImage} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Título do Card</Card.Title>
          <Card.Text>
            Descrição do card. Aqui você pode adicionar mais informações sobre as flores.
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default FlowerCard;
