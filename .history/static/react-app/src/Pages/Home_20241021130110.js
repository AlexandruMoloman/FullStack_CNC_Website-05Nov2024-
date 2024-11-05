import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Map from '../Components/GoogleMaps';
import Cards from '../Components/Cards';
import Gif from '../Components/Gif';
import img from '../img/DJI_0346.jpg';
import biglia from '../img/biglia.png';
import azienda from '../img/azienda.f18f05aaf59e5ec1dfbc.jpg';
import ContentHome from '../InfoHome/ContentHome';
import CookieBanner from '../Components/CookieBanner';
import ScrollToTop from '../Components/ScrollToTop';

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
    alert('Button clicked!');
  };

  return (
    <>
      <Gif />
      <StyledContainer className="py-5">
        <Title>
          {ContentHome.map((info) => (
            <p key={info.titleInformazioni}>{info.titleInformazioni}</p>
          ))}
        </Title>
      </StyledContainer>

      <StyledContainer className="py-5">
        <Cards />
      </StyledContainer>

      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(white, red, white)', minHeight: '95vh' }}>
        <Title style={{ color: 'black' }}>
          {ContentHome.map((info) => (
            <p key={info.titleAvanzamento}>{info.titleAvanzamento}</p>
          ))}
        </Title>

        <Row xs={1} md={1} lg={2}>
          <Col md={6}>
            <Text style={{ color: 'black' }}>
              {ContentHome.map((info) => (
                <p key={info.text}>{info.text}</p>
              ))}
              {ContentHome.map((info) => (
                <p key={info.textAvanzamento}></p>
              ))}
              
                <ul>
                  <li>Oliodinamica</li>
                  <li>Aerodinamica</li>
                  <li>Automotive</li>
                  <li>Pneumatica</li>
                </ul>
                Questo ci consente di offrire ai nostri clienti soluzioni affidabili ed efficienti,
                che soddisfano i requisiti più elevati. Il nostro team di esperti è pronto ad
                adattarsi alle vostre esigenze e fornire soluzioni uniche per il vostro business.
              </p>
            </Text>
          </Col>

          <Col md={6}>
            <img
              src={biglia}
              alt="Biglia"
              className="img-fluid"
              style={{
                width: '100%',
                marginTop: '3rem',
                border: '10px solid white',
                borderRadius: '20% 50% 20% 50%',
                opacity: '0.8',
              }}
            />
          </Col>
        </Row>
      </Container>
      <img
        src={img}
        alt="Azienda"
        className="img-fluid mt-2"
        style={{ width: '100%', marginTop: '1rem' }}
      />
      <Container className="py-4">
        <Row>
          <Col md={6}>
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

          <Col md={6}>
            <img
              src={azienda}
              alt="Azienda"
              className="img-fluid mt-2"
              style={{ width: '100%', marginTop: '1rem' }}
            />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(white, darkred, grey)' }}>
        <Row>
          <Col md={6} className="text-center py-5">
            <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
            <p className="fw-bold">P. IVA: IT01772580336</p>
            <p className="fw-bold">Tel: +39 035.5682454</p>
            <p className="fw-bold">
              Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
            </p>
          </Col>

          <Col md={6}>
            <Map />
          </Col>
        </Row>
      </Container>
      <CookieBanner />
      <ScrollToTop />
    </>
  );
};

export default Home;
