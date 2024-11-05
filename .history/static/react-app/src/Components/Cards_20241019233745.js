import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import img from '../img/0.JPG';
import pezzo from '../img/5.jpg';
import i5 from '../img/8.JPG';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding: 2rem 0;
  text-align: center;
  background: linear-gradient(lightgrey, red, black);
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 350px;
  height: 100%;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const StyledCardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const StyledCardBody = styled(Card.Body)`
  text-align: center;
  padding: 1.5rem;
`;

const StyledTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const StyledText = styled(Card.Text)`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h4`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: #ff5733;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c70039;
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

  const [refForza, inViewForza] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refLavori, inViewLavori] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refStabilita, inViewStabilita] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <StyledContainer>
      <Title>Innovazione e Tecnologia nella CNC</Title>
      <Subtitle>Le nostre aree di competenza</Subtitle>

      <StyledRow xs={1} md={2} lg={3}>
        <Col md={4}>
          <div ref={refForza}>
            {inViewForza && (
              <StyledCard>
                <StyledCardImg variant="top" src={img} />
                <StyledCardBody>
                  <StyledTitle>{textData.forza.title}</StyledTitle>
                  <StyledText>{textData.forza.text}</StyledText>
                  <Link to="targetElement" smooth duration={500}>
                    <StyledButton>Scopri di Piu</StyledButton>
                  </Link>
                </StyledCardBody>
              </StyledCard>
            )}
          </div>
        </Col>

        <Col md={4}>
          <div ref={refLavori}>
            {inViewLavori && (
              <StyledCard>
                <StyledCardImg variant="top" src={pezzo} />
                <StyledCardBody>
                  <StyledTitle>{textData.lavori.title}</StyledTitle>
                  <StyledText>{textData.lavori.text}</StyledText>
                  <Link to="targetElement" smooth duration={500}>
                    <StyledButton>Scopri di Piu</StyledButton>
                  </Link>
                </StyledCardBody>
              </StyledCard>
            )}
          </div>
        </Col>

        <Col md={4}>
          <div ref={refStabilita}>
            {inViewStabilita && (
              <StyledCard>
                <StyledCardImg variant="top" src={i5} />
                <StyledCardBody>
                  <StyledTitle>{textData.stabilita.title}</StyledTitle>
                  <StyledText>{textData.stabilita.text}</StyledText>
                  <Link to="targetElement" smooth duration={500}>
                    <StyledButton>Scopri di Piu</StyledButton>
                  </Link>
                </StyledCardBody>
              </StyledCard>
            )}
          </div>
        </Col>
      </StyledRow>
    </StyledContainer>
  );
};

export default Cards;
