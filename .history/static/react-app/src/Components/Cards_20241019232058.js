import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import img from '../img/0.JPG';
import pezzo from '../img/5.jpg';
import i5 from '../img/8.JPG';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  text-align: center;

  @media (max-width: 576px) {
    padding-top: 1rem;
  }
`;
const StyledCard = styled(Card)`
  margin: 1rem;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
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

  &:hover {
    background-color: black;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding: 0.4rem 1.5rem;
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
    <StyledContainer>
      <Row xs={1} md={2} lg={3}>
        <Col md={4}>
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
        </Col>
        <Col md={4}>
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
        </Col>
        <Col md={4}>
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
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Cards;
