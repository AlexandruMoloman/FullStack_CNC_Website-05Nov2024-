import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollTotop from '../Components/ScrollToTop';
import img from '../img/prodotti1.jpg';
import styled from 'styled-components';
import ale from '../img/Ale.jpg';
import lb15 from '../img/lb-15.jpg';
import pneuma from '../img/pneuma.JPG';
import Automotive from '../img/automotive.jpg';
const StyledSection = styled.section`
  background: linear-gradient(black, black, darkred, grey);
  min-height: 100vh; /* Устанавливаем минимальную высоту */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Центрируем содержимое */
  align-items: center; /* Центрируем содержимое по горизонтали */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 55vh;
  max-height: 250vh; /* Ограничиваем максимальную высоту */
  object-fit: cover; /* Позволяет изображению сохранять пропорции */
  margin-top: 1rem;
`;

const RoundImage = styled.img`
  width: 50vh; /* Устанавливаем ширину */
  border-radius: 20% 50% 20% 50%; /* Закругленные углы */
  opacity: 0.7; /* Полупрозрачность */
  border: 12px solid white; /* Белая рамка */
  margin-top: 1rem; /* Отступ сверху */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Тень для глубины */
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: white; /* Цвет текста для контраста */
  margin-top: 1rem; /* Отступ сверху */
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: white; /* Цвет текста для контраста */
`;

const Prodotti = () => {
  return (
    <StyledSection>
      <Container fluid className="py-5">
        <StyledImage src={img} alt="prodotti" className="img-fluid py-5" />
      </Container>

      <Container>
        <Row className="align-items-center fluid py-5 ">
          <Col md={6} className="d-flex justify-content-center">
            <RoundImage src={ale} alt="Operaio" className="img-fluid" />
          </Col>
          <Col md={6}>
            <Subtitle>I nostri Prodotti CNC</Subtitle>
            <Text>
              "I nostri prodotti CNC rappresentano una combinazione perfetta di tecnologie avanzate
              e precisione, garantendo risultati eccezionali per i settori più esigenti. Ogni
              dettaglio è realizzato con precisione impeccabile, assicurando affidabilità e durata
              nell'uso. Siamo orgogliosi che le nostre soluzioni CNC permettano ai clienti di
              raggiungere la massima efficienza e produttività. Sviluppi innovativi e un rigoroso
              controllo qualità fanno dei nostri prodotti la scelta ideale per i professionisti.
              Offri al tuo business l'opportunità di beneficiare dei vantaggi delle alte tecnologie
              e dell'alta qualità."
            </Text>
          </Col>
          <Row className="align-items-center fluid py-5 ">
            <Col md={6}>
              <Subtitle>Oliodinamica</Subtitle>
              <Text>
                "La oleodinamica è un elemento chiave che garantisce il funzionamento affidabile ed
                efficiente delle attrezzature, assicurando fluidità e precisione nei movimenti.
                Offriamo soluzioni avanzate in grado di resistere a condizioni estreme di esercizio
                e garantire longevità. I nostri prodotti nel campo della oleodinamica rispettano i
                più alti standard di qualità e sicurezza. Comprendiamo quanto sia importante la
                stabilità operativa per il tuo business, quindi prestiamo particolare attenzione a
                ciascun componente. Affidati a noi per la tua affidabilità e riceverai prodotti su
                cui poter contare."
              </Text>
            </Col>
            <Col md={6}>
              <Col className="d-flex justify-content-center">
                <RoundImage src={lb15} alt="lb-15" className="img-fluid" />
              </Col>
            </Col>
          </Row>
          <Row className="align-items-center fluid py-5 ">
            <Col md={6} className="d-flex justify-content-center">
              <RoundImage src={pneuma} alt="Pneumatica" className="img-fluid" />
            </Col>
            <Col md={6}>
              <Subtitle>Pneumatica</Subtitle>
              <Text>
                "La pneumatica è uno strumento potente per aumentare l'efficienza e la precisione in
                diversi processi produttivi. Offriamo soluzioni innovative che consentono di
                utilizzare l'energia dell'aria per svolgere compiti con costi minimi e risultati
                massimi. I nostri prodotti nel campo della pneumatica rispettano i più alti
                requisiti di qualità e affidabilità, assicurando un funzionamento continuo delle
                attrezzature. Sappiamo quanto siano importanti stabilità e velocità, quindi
                sviluppiamo soluzioni che si adattano perfettamente alle tue esigenze. Affidaci i
                tuoi sistemi pneumatici e sentirai la differenza nella qualità e nella
                produttività."
              </Text>
            </Col>
          </Row>
          <Row className="align-items-center fluid py-5 ">
            <Col md={6}>
              <Subtitle>Automotive</Subtitle>
              <Text>
                "L'automazione è la strada per aumentare l'efficienza e ridurre i costi, che
                offriamo a ogni nostro cliente attraverso le nostre soluzioni innovative. Creiamo
                sistemi che aiutano a ottimizzare i processi e a ridurre il fattore umano,
                garantendo stabilità e prevedibilità nei risultati. I nostri prodotti nel campo
                dell'automazione sono una garanzia di aumento della produttività e della qualità in
                ogni fase della produzione. Comprendiamo che ogni dettaglio è importante e ci
                impegniamo affinché l'automazione diventi il tuo partner affidabile. Unisciti a noi
                e scopri nuove opportunità per il tuo business."
              </Text>
            </Col>
            <Col md={6}>
              <Col className="d-flex justify-content-center">
                <RoundImage src={Automotive} alt="Automotive" className="img-fluid" />
              </Col>
            </Col>
          </Row>
        </Row>
      </Container>
      <ScrollTotop />
    </StyledSection>
  );
};

export default Prodotti;
