import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/8.JPG';
import styled from 'styled-components';

const StyledCardsContainer = styled(Container)`
  padding-top: 0rem;
  padding-bottom: 2rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-left: 0rem;
  padding-right: 0rem;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Cards = () => {
  const textData = {
    forza: {
      title: 'La Nostra Forza',
      text: 'La nostra forza risiede nella precisione delle misure dei nostri pezzi...',
    },
    lavori: {
      title: 'Nostri Lavori',
      text: 'La nostra dedizione costante al miglioramento...',
    },
    stabilita: {
      title: 'La Nostra Stabilita',
      text: 'La nostra stabilità è il fondamento su cui costruiamo il nostro percorso...',
    },
  };

  // Используем хук useInView
  const [refForza, inViewForza] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refLavori, inViewLavori] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refStabilita, inViewStabilita] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <StyledCardsContainer>
      <Row>
        <Col md={4}>
          <StyledCard>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Progettazione Avanzata</Card.Title>
              <Card.Text>
                Utilizziamo software di progettazione all'avanguardia per creare soluzioni su misura
                per i nostri clienti.
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
                Ogni pezzo è realizzato con la massima precisione, garantendo qualità e durata nel
                tempo.
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
                Le nostre soluzioni automatizzate migliorano l'efficienza e riducono i costi
                operativi.
              </Card.Text>
              <Button variant="primary">Scopri di più</Button>
            </Card.Body>
          </StyledCard>
        </Col>
      </Row>
    </StyledCardsContainer>
  );
};

export default Cards;
