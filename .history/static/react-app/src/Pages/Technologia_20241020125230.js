import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import CardsTech from '../Components/CardsTech';
const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Technologia = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(lightgrey, red, black)',
        paddingTop: '10rem', // Добавлено значение для отступа сверху
      }}>
      <Container fluid className="py-5">
        <Row>
          <Col>
            <Title>Innovazione e Tecnologia nella CNC</Title>
            <Description>
              La nostra azienda si impegna a fornire soluzioni avanzate nel campo della CNC,
              garantendo la massima precisione e qualità nei nostri prodotti.
            </Description>
            <div className="text-center">
              <Button variant="primary">Contattaci</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <CardsTech />
    </section>
  );
};

export default Technologia;
