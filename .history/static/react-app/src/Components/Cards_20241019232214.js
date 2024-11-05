import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import img from '../img/0.JPG';
import pezzo from '../img/5.jpg';
import i5 from '../img/8.JPG';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 1rem;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

<Row>
  <Col md={4}>
    <StyledCard>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Progettazione Avanzata</Card.Title>
        <Card.Text>
          Utilizziamo software di progettazione all'avanguardia per creare soluzioni su misura per i
          nostri clienti.
        </Card.Text>
        <Button variant="primary">Scopri di più</Button>
      </Card.Body>
    </StyledCard>
  </Col>
  <Col md={4}>
    <StyledCard>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Precisione e Qualità</Card.Title>
        <Card.Text>
          Ogni pezzo è realizzato con la massima precisione, garantendo qualità e durata nel tempo.
        </Card.Text>
        <Button variant="primary">Scopri di più</Button>
      </Card.Body>
    </StyledCard>
  </Col>
  <Col md={4}>
    <StyledCard>
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Card.Title>Automazione e Efficienza</Card.Title>
        <Card.Text>
          Le nostre soluzioni automatizzate migliorano l'efficienza e riducono i costi operativi.
        </Card.Text>
        <Button variant="primary">Scopri di più</Button>
      </Card.Body>
    </StyledCard>
  </Col>
</Row>;

export default Cards;
