import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import img from '../img/0.JPG';
import pezzo from '../img/5.jpg';
import i5 from '../img/8.JPG';
import styled from 'styled-components';

const MAX_TEXT_LENGTH = 100; // Лимит символов для текста

const StyledCardsContainer = styled(Container)`
  padding-top: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 2rem;
  }

  @media (max-width: 576px) {
    padding-top: 1rem;
  }
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background-color: #8b0000; /* darkRed */
  border: none;
  font-size: 1rem;
  padding: 0.6rem 2rem;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 0 auto;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background-color: black;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding: 0.5rem 1.8rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 18rem; /* Фиксированная ширина */
  height: 24rem; /* Фиксированная высота */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const CardTextLimited = styled(Card.Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Ограничение по количеству строк */
  -webkit-box-orient: vertical;
  height: 5rem; /* Высота для ограничения текста */
`;

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const Cards = () => {
  const textData = {
    forza: {
      title: 'Innovazione e Tecnologia nella CNC',
      text: "Utilizziamo software di progettazione all'avanguardia per creare soluzioni su misura per i nostri clienti.",
    },
    lavori: {
      title: 'Precisione e Qualità',
      text: 'Ogni pezzo è realizzato con la massima precisione, garantendo qualità и durata nel tempo.',
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
      <Row xs={1} md={2} lg={3}>
        <StyledCol>
          <div ref={refForza}>
            {inViewForza && (
              <StyledCard>
                <Card.Img variant="top" src={img} style={{ objectFit: 'cover', height: '150px' }} />
                <Card.Body>
                  <Card.Title>{textData.forza.title}</Card.Title>
                  <CardTextLimited>
                    {truncateText(textData.forza.text, MAX_TEXT_LENGTH)}
                  </CardTextLimited>
                  <Link to="targetElement">
                    <StyledButton>Scopri di Piu</StyledButton>
                  </Link>
                </Card.Body>
              </StyledCard>
            )}
          </div>
        </StyledCol>

        <StyledCol>
          <div ref={refLavori}>
            {inViewLavori && (
              <StyledCard>
                <Card.Img
                  variant="top"
                  src={pezzo}
                  style={{ objectFit: 'cover', height: '150px' }}
                />
                <Card.Body>
                  <Card.Title>{textData.lavori.title}</Card.Title>
                  <CardTextLimited>
                    {truncateText(textData.lavori.text, MAX_TEXT_LENGTH)}
                  </CardTextLimited>
                  <Link to="targetElement">
                    <StyledButton>Scopri di Piu</StyledButton>
                  </Link>
                </Card.Body>
              </StyledCard>
            )}
          </div>
        </StyledCol>

        <StyledCol>
          <div ref={refStabilita}>
            {inViewStabilita && (
              <StyledCard>
                <Card.Img variant="top" src={i5} style={{ objectFit: 'cover', height: '150px' }} />
                <Card.Body>
                  <Card.Title>{textData.stabilita.title}</Card.Title>
                  <CardTextLimited>
                    {truncateText(textData.stabilita.text, MAX_TEXT_LENGTH)}
                  </CardTextLimited>
                  <Link to="targetElement">
                    <StyledButton>Scopri di Piu</StyledButton>
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
