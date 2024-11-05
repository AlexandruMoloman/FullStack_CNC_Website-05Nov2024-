import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import CardsTech from '../Components/CardsTech';
import Colage from '../Components/Colage';
import Ale from '../img/Aleraio.PNG';
import Ele from '../img/Ele.PNG';
import Cris from '../img/Cris.png';
const Section = styled.section`
  background: linear-gradient(darkred, black, grey);
  padding-top: 8rem;
  padding-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  text-align: left;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Technologia = () => {
  return (
    <Section>
      <Colage />
      <Container fluid className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Title>Capo di RO.E.MA</Title>
            <Description>
              Ciao! Sono Cristian, Capo Azienda CNC di RO.E.MA e Meccanico con oltre 30 anni di
              esperienza nel settore. Specializzato nella programmazione e operatività di macchinari
              a controllo numerico, ho guidato progetti complessi per l'industria meccanica di
              precisione. La mia passione è trovare soluzioni innovative per ogni sfida tecnica.
              Lavoro sempre con l'obiettivo di offrire qualità e affidabilità ai nostri clienti.
            </Description>
          </Col>

          <Col md={6} className="text-center">
            <StyledImage src={Cris} alt="Cristian Rota" />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <StyledImage src={Ale} alt="Alessandro Rota" />
          </Col>
          <Col md={6}>
            <Title>Operaio - Programatore CNC</Title>
            <Description>
              Mi chiamo Alessandro, e sono un programmatore CNC con oltre 5 anni di esperienza nel
              settore della meccanica di precisione. La mia passione per la tecnologia e la
              meccanica mi permette di creare soluzioni efficienti e precise. Il mio obiettivo è
              sempre garantire alta qualità e soddisfare le esigenze dei clienti.
            </Description>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <Title></Title>
            <Description>
              Ciao, sono Elena. Lavoro in ufficio e mi occupo della gestione economica dell’azienda.
              Il mio ruolo è garantire lo sviluppo e la crescita costante del nostro stabilimento.
              Sono qui per assicurarmi che ogni decisione rispecchi i nostri interessi e
              contribuisca al futuro prospero della nostra attività.
            </Description>
          </Col>

          <Col md={6} className="text-center">
            <StyledImage src={Ele} alt="Elena Maggiolini" />
          </Col>
        </Row>
      </Container>
      <CardsTech />
    </Section>
  );
};

export default Technologia;
