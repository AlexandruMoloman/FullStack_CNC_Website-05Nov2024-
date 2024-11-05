import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import image1 from '../img/1.jpg'; // Добавьте свои изображения
import image2 from '../img/5.jpg'; // Добавьте свои изображения
import image3 from '../img/8.JPG'; // Добавьте свои изображения

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

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  max-width: 600px;
  margin: 0 auto 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Technologia = () => {
  return (
    <section style={{ background: 'linear-gradient(lightgrey, red, black)' }}>
      <StyledContainer>
        <Title>Innovazione e Tecnologia nella CNC</Title>
        <Description>
          La nostra azienda, fondata 5 anni fa, si è rapidamente affermata nel settore CNC, grazie
          all'esperienza trentennale del nostro fondatore nella progettazione e produzione di
          componenti. Siamo dedicati all'innovazione continua e alla qualità, per garantire ai
          nostri clienti le soluzioni più avanzate.
        </Description>

        <Row>
          <Col md={4}>
            <StyledCard>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Progettazione Avanzata</Card.Title>
                <Card.Text>
                  Utilizziamo software di progettazione all'avanguardia per creare soluzioni su
                  misura per i nostri clienti.
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

        <Subtitle>Il nostro impegno</Subtitle>
        <Description>
          Siamo impegnati a fornire un servizio eccellente, ascoltando le esigenze dei nostri
          clienti e offrendo soluzioni innovative che superano le aspettative. Con un mix di
          esperienza e tecnologia, siamo pronti a portare il tuo business a nuovi livelli di
          successo.
        </Description>

        <Button variant="success" style={{ margin: '2rem 0' }}>
          Contattaci
        </Button>
      </StyledContainer>
    </section>
  );
};

export default Technologia;
