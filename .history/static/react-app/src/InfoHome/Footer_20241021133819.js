import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Map from '../Components/GoogleMaps';

const Footer = (props) => {
  return (
    <>
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
    </>
  );
};

export default Footer;
