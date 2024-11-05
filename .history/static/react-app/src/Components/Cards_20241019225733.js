import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import img from '../img/0.JPG';
import pezzo from '../img/5.jpg';
import i5 from '../img/8.JPG';
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

const StyledButton = styled(Button)`
  background-color: darkRed;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  display: flex;
  text-decoration: none;

  &:hover {
    background-color: black;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding: 0.4rem 1.5rem;
  }
`;
const StyledCard = styled(Card)`
  margin: 1rem;
  border: none;
  border-radius: 15px;
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
      title: 'Precisione e Qualità',
      text: 'Ogni pezzo è realizzato con la massima precisione, garantendo qualità e durata nel tempo.',
    },
    stabilita: {
      title: 'Automazione e Efficienza',
      text: "Le nostre soluzioni automatizzate migliorano l'efficienza e riducono i costi operativi.",
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
                <Card.Img variant="top" src={img} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{textData.forza.title}</Card.Title>
                  <Card.Text>{textData.forza.text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <StyledButton variant="primary">Scopri di Piu</StyledButton>
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
                <Card.Img variant="top" src={pezzo} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{textData.lavori.title}</Card.Title>
                  <Card.Text>{textData.lavori.text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <StyledButton variant="primary">Scopri di Piu</StyledButton>
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
                <Card.Img variant="top" src={i5} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{textData.stabilita.title}</Card.Title>
                  <Card.Text>{textData.stabilita.text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <StyledButton variant="primary">Scopri di Piu</StyledButton>
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
