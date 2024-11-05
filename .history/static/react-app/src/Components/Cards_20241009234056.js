import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
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
  display: flex; // Flexbox для выравнивания
  justify-content: center; // Центрируем карточку
`;

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &hover {
    tranform: scale(1.05);
  }
`;
const Cards = () => {
  const textData = {
    forza: {
      title: 'La Nostra Forza',
      text: 'La nostra forza risiede nella precisione delle misure dei nostri pezzi. La misurazione accurata dei componenti è alla base della fiducia dei nostri clienti. Per noi, i clienti sono il motore del nostro progresso continuo. One more line needed',
    },
    lavori: {
      title: 'Nostri Lavori',
      text: "La nostra dedizione costante al miglioramento ************** riflette la nostra volontà di crescere costantemente. Ogni esperienza non solo ci offre nuove opportunità di apprendimento, ma anche il terreno fertile per l'evoluzione.",
    },
    stabilita: {
      title: 'La Nostra Stabilita',
      text: "La nostra stabilità è il fondamento su cui costruiamo il nostro percorso verso l'eccellenza, resistendo con fermezza. In ogni istante, manteniamo saldo il nostro impegno, sostenendo la forza di un progresso duraturo e ispiratore.",
    },
  };

  return (
    <StyledCardsContainer>
      <Row xs={1} md={1} lg={3} xl={3}>
        {Object.keys(textData).map((key, index) => (
          <StyledCol key={key} style={{ paddingBottom: '5rem' }}>
            <Fade
              bottom={index % 4 === 0}
              top={index % 4 !== 0}
              left={index % 4 === 0}
              right={index % 4 !== 0}
              delay={index * 200}>
              <StyledCard>
                <Card.Img
                  variant="top"
                  src={key === 'forza' ? img : key === 'lavori' ? pezzo : i5}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{textData[key].title}</Card.Title>
                  <Card.Text>{textData[key].text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <Button variant="primary">Scopri di Piu</Button>
                  </Link>
                </Card.Body>
              </StyledCard>
            </Fade>
          </StyledCol>
        ))}
      </Row>
    </StyledCardsContainer>
  );
};

export default Cards;
