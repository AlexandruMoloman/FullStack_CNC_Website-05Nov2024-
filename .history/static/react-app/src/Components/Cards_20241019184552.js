import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import img from '../img/3.jpg';
import pezzo from '../img/pezzo.jpg';
import i5 from '../img/5.jpg';
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
      title: 'Innovazione e Tecnologia nella CNC',
      text: "Utilizziamo software di progettazione all'avanguardia per creare soluzioni su misura per i nostri clienti.",
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
      <Row xs={1} md={1} lg={3} xl={3}>
        <StyledCol style={{ paddingBottom: '5rem' }}>
          <div ref={refForza}>
            {inViewForza && (
              <StyledCard>
                <Card.Img variant="top" src={img} height={400} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{textData.forza.title}</Card.Title>
                  <Card.Text>{textData.forza.text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <Button variant="primary">Scopri di Piu</Button>
                  </Link>
                </Card.Body>
              </StyledCard>
            )}
          </div>
        </StyledCol>

        <StyledCol style={{ paddingBottom: '5rem' }}>
          <div ref={refLavori}>
            {inViewLavori && (
              <StyledCard>
                <Card.Img variant="top" src={pezzo} height={400} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{textData.lavori.title}</Card.Title>
                  <Card.Text>{textData.lavori.text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <Button variant="primary">Scopri di Piu</Button>
                  </Link>
                </Card.Body>
              </StyledCard>
            )}
          </div>
        </StyledCol>

        <StyledCol style={{ paddingBottom: '5rem' }}>
          <div ref={refStabilita}>
            {inViewStabilita && (
              <StyledCard>
                <Card.Img variant="top" src={i5} height={400} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{textData.stabilita.title}</Card.Title>
                  <Card.Text>{textData.stabilita.text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <Button variant="primary">Scopri di Piu</Button>
                  </Link>
                </Card.Body>
              </StyledCard>
            )}
          </div>
        </StyledCol>
      </Row>
    </StyledCardsContainer>
  );
};

export default Cards;
