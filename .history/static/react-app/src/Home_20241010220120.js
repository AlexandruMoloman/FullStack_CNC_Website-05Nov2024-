import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';
import Gif from './Components/Gif';

const StyledContainer = styled(Container)`
  @media (max-width: 320px) {
    margin-top: 0rem;
  }
`;

const Title = styled.h1`
  border-left: 5px darkRed solid;
  margin-top: 2.7rem;
  margin-left: 0.2rem;
  padding-left: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
`;

const Text = styled.p`
  font-size: 1.25rem;
`;

export const Home = () => {
  const handleLearnMoreClick = () => {
    // Логика для обработки нажатия на кнопку "Scopri di Piu"
    alert('Button clicked! ');
  };

  return (
    <>
      <Gif />
      <StyledContainer className="py-5">
        <Title>Informazioni</Title>
      </StyledContainer>

      <Cards />

      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(to right, red, black)', minHeight: '95vh' }}>
        <Title>Avanzamento</Title>
        <Row xs={1} md={1} lg={2} xl={2}>
          <Col md={6}>
            <Text>
              Some text Some text Some text ... Some text Some text Some text Some text Some text
              ...text ...text ...text ...text ...
            </Text>
          </Col>
          <Col md={6} style={{ paddingTop: '0rem' }}>
            <img
              src="/static/media/biglia.489910104651d3dd950c.png"
              alt="Biglia"
              className="img-fluid"
              style={{ width: '100%', marginTop: '1rem' }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="py-4">
        <Row>
          <Col md={6}></Col>
          <Col md={6} style={{ paddingTop: '2rem' }}>
            <Subtitle>ROEMA: Mecanica di Precisione</Subtitle>
            <Text>
              Anche un piccolo pezzo può fare la differenza: è una questione di frazioni di
              millimetro, di qualità dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene
              e abbiamo il personale e le tecnologie per creare la componente perfetta.
            </Text>

            <ul className="fs-4">
              <li>Tornitura e fresatura di altissima precisione con macchine fino a 9 assi</li>
              <li>Trattamenti superficiali</li>
              <li>
                Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
                ferro-nichel e titanio
              </li>
            </ul>
            <Text>
              <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
            </Text>
            <Text>Su richiesta viene effettuata la campionatura del pezzo finale</Text>
            <Button variant="primary" className="fs-4" onClick={handleLearnMoreClick}>
              Scopri di Piu
            </Button>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(to right, red, black)' }}>
        <Row>
          <Col md={6} className="text-center py-5">
            <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
            <p className="fw-bold">P. IVA: IT01772580336</p>
            <p className="fw-bold">Tel: +39 035.5682454</p>
            <p className="fw-bold">
              Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
            </p>
          </Col>

          <Col md={6}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
