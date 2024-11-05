import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';

import Map from '../Components/GoogleMaps';

import Gif from '../Components/Gif';
import img from '../img/DJI_0346.jpg';

import CookieBanner from '../Components/CookieBanner';
import ScrollToTop from '../Components/ScrollToTop';
import Informazioni from '../InfoHome/Informazioni';
import Avanzamento from '../InfoHome/Avanzamento';
import DownContent from '../InfoHome/DownContent';

export const Home = () => {
  const handleLearnMoreClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Gif />
      <Informazioni />
      <Avanzamento />
      <img
        src={img}
        alt="Azienda"
        className="img-fluid mt-2"
        style={{ width: '100%', marginTop: '1rem' }}
      />
      <DownContent />
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
