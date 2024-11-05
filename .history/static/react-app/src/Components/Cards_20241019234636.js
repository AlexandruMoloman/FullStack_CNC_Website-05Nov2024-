import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import img from '../img/0.JPG';
import pezzo from '../img/5.jpg';
import i5 from '../img/8.JPG';
import styled from 'styled-components';

const StyledCardsContainer = styled(Container)`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 576px) {
    padding-top: 1rem;
  }
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

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    margin-bottom: 1.5rem;
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

  @media (max-width: 576px) {
    max-width: 90%;
    @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const StyledCardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media (max-width: 576px) {
    height: 150px;
  }
`;

const StyledCardBody = styled(Card.Body)`
  text-align: center;
  padding: 1.5rem;

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const StyledTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const StyledText = styled(Card.Text)`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: darkred;
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
      title: 'Tecnologia nella CNC',
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
    <StyledCardsContainer>
      <StyledRow xs={1} md={2} lg={3}>
        <StyledCol>
          <div ref={refForza}>
            {inViewForza && (
              <StyledCard fluid>
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
        </StyledCol>

        <StyledCol>
          <div ref={refLavori}>
            {inViewLavori && (
              <StyledCard fluid>
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
        </StyledCol>

        <StyledCol>
          <div ref={refStabilita}>
            {inViewStabilita && (
              <StyledCard fluid>
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
        </StyledCol>
      </StyledRow>
    </StyledCardsContainer>
  );
};

export default Cards;
