import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CardsTech from '../Components/CardsTech';
import Colage from '../Components/Colage';
import Ale from '../img/Aleraio.PNG';
import Ele from '../img/Ele.PNG';
import Cris from '../img/Cris.png';
import calibro from '../img/calibro.png';
import pre from '../img/pre.jpg';
import pro from '../img/pro.jpg';
import micrometro from '../img/micrometr.png';
import ScrollToTop from '../Components/ScrollToTop';

const Section = styled.section`
  background: linear-gradient(darkred, black, grey);
  padding-top: 8rem;
  padding-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: center; // Центрируем текст
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center; // Центрируем текст
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  border: 2px white solid;
  border-radius: 20%;
  opacity: 0.5;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 2px;
    background: white;
    margin: 0.5rem auto;
    width: 40%;
  }
`;

const PersonSection = ({ name, title, description, image }) => (
  <Row className="align-items-center mb-5">
    <Col md={6} className="text-center">
      <StyledImage src={image} alt={name} loading="lazy" />
    </Col>
    <Col md={6}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Col>
  </Row>
);

const Technologia = () => {
  return (
    <Section>
      <Container fluid className="py-5">
        <PersonSection
          name="Cristian Rota"
          title="Capo di RO.E.MA - Cristian Rota"
          description="Ciao! Sono Cristian, Capo Azienda CNC di RO.E.MA e Meccanico con oltre 30 anni di esperienza nel settore..."
          image={Cris}
        />

        <PersonSection
          name="Alessandro Rota"
          title="Operaio - Programatore CNC - Alessandro Rota"
          description="Mi chiamo Alessandro, e sono un programmatore CNC con oltre 5 anni di esperienza nel settore della meccanica di precisione..."
          image={Ale}
        />

        <PersonSection
          name="Elena Maggiolini"
          title="Amministratrice - Elena Maggiolini"
          description="Ciao, sono Elena. Lavoro in ufficio e mi occupo della gestione economica dell’azienda..."
          image={Ele}
        />
      </Container>

      <Container fluid className="py-5">
        <TitleWrapper>
          <Title>La Nostra Tecnologia</Title>
        </TitleWrapper>

        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <StyledImage src={pre} alt="concentricita" />
          </Col>
          <Col md={6}>
            <Title>La concentricità</Title>
            <Description>
              La concentricità è la misura della coerenza del centro di una forma rotante rispetto a
              un asse comune...
            </Description>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <Title>L'asse</Title>
            <Description>
              L'asse in una macchina CNC (controllo numerico computerizzato) è la direzione lungo la
              quale si muovono gli utensili...
            </Description>
          </Col>
          <Col md={6} className="text-center">
            <StyledImage src={pro} alt="doosan" />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <StyledImage src={calibro} alt="calibro" />
          </Col>
          <Col md={6}>
            <Title>Diametro</Title>
            <Description>
              Un diametro preciso è fondamentale nella produzione di componenti meccanici...
            </Description>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <Title>Precisione</Title>
            <Description>
              Il micrometro è uno strumento di precisione utilizzato per misurare dimensioni molto
              piccole...
            </Description>
          </Col>
          <Col md={6} className="text-center">
            <StyledImage src={micrometro} alt="micrometro" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5">
        <CardsTech />
      </Container>
      <ScrollToTop />
    </Section>
  );
};

export default Technologia;
