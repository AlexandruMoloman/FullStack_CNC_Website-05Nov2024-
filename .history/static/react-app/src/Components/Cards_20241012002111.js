import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem; // Чтобы кнопка была на фиксированном расстоянии от текста
`;

const Cards = () => {
  const textData = {
    forza: {
      title: 'La Nostra Forza',
      text: 'La nostra forza risiede nella precisione delle misure dei nostri pezzi...',
    },
    lavori: {
      title: 'Nostri Lavori',
      text: 'La nostra dedizione costante al miglioramento riflette la nostra volontà di crescere...',
    },
    stabilita: {
      title: 'La Nostra Stabilita',
      text: 'La nostra stabilità è il fondamento su cui costruiamo il nostro percorso...',
    },
  };

  return (
    <StyledCardsContainer>
      <Row xs={1} md={1} lg={3} xl={3}>
        {Object.keys(textData).map((key, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true, // Анимация запускается один раз при прокрутке
            threshold: 0.3, // Карточка станет видимой при достижении 30% зоны просмотра
          });

          return (
            <StyledCol key={key} style={{ paddingBottom: '5rem' }}>
              <div ref={ref}>
                <StyledCard
                  style={{
                    transform: inView ? 'translateY(0)' : 'translateY(100px)',
                    opacity: inView ? 1 : 0,
                    transition: 'all 0.5s ease',
                  }}>
                  <Card.Img
                    variant="top"
                    src={key === 'forza' ? img : key === 'lavori' ? pezzo : i5}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{textData[key].title}</Card.Title>
                    <Card.Text>{textData[key].text}</Card.Text>
                    <ButtonContainer>
                      <Link to="targetElement" smooth duration={500}>
                        <Button variant="primary">Scopri di Piu</Button>
                      </Link>
                    </ButtonContainer>
                  </Card.Body>
                </StyledCard>
              </div>
            </StyledCol>
          );
        })}
      </Row>
    </StyledCardsContainer>
  );
};

export default Cards;
