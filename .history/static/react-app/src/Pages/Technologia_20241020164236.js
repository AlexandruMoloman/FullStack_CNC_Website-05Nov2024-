import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
const Section = styled.section`
  background: linear-gradient(darkred, black, grey);
  padding-top: 8rem;
  padding-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: left;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: left;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Technologia = () => {
  return (
    <Section>
      <Container fluid className="py-5">
        {/* Cristian Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Title>Capo di RO.E.MA - Cristian Rota</Title>
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

        {/* Alessandro Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center">
            <StyledImage src={Ale} alt="Alessandro Rota" />
          </Col>
          <Col md={6}>
            <Title>Operaio - Programatore CNC - Alessandro Rota</Title>
            <Description>
              Mi chiamo Alessandro, e sono un programmatore CNC con oltre 5 anni di esperienza nel
              settore della meccanica di precisione. La mia passione per la tecnologia e la
              meccanica mi permette di creare soluzioni efficienti e precise. Il mio obiettivo è
              sempre garantire alta qualità e soddisfare le esigenze dei clienti.
            </Description>
          </Col>
        </Row>

        {/* Elena Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <Title>Amministratrice - Elena Maggiolini</Title>
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
      <Container fluid className="py-5" style={{ justifyContent: 'center' }}>
        <Title>La Nostra Technologia</Title>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <StyledImage
              src={pre}
              alt="concentricita"
              style={{ border: '2px white solid', borderRadius: '20%', opacity: '0.5' }}
            />
          </Col>
          <Col md={6}>
            <Title>La concentricità</Title>
            <Description>
              La concentricità è la misura della coerenza del centro di una forma rotante rispetto a
              un asse comune. È fondamentale per garantire che una parte meccanica ruoti in modo
              uniforme, senza sbilanciamenti o vibrazioni eccessive. Nella produzione di componenti
              di precisione, una concentricità elevata è essenziale per ridurre l'usura e prolungare
              la durata delle macchine. Questo aspetto è cruciale per mantenere alte prestazioni e
              sicurezza nelle applicazioni industriali.
            </Description>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <Title>L'asse</Title>
            <Description>
              L'asse in una macchina CNC (controllo numerico computerizzato) è la direzione lungo la
              quale si muovono gli utensili o i pezzi da lavorare. Più assi ha la macchina (ad
              esempio, 3, 5 o 9), più complesse e precise possono essere le lavorazioni. La presenza
              di più assi consente di eseguire operazioni più rapide e complesse, riducendo i tempi
              di produzione. Un controllo preciso di ciascun asse è fondamentale per garantire la
              qualità e la velocità della lavorazione, soprattutto nei progetti ad alta precisione.
            </Description>
          </Col>
          <Col md={6} className="text-center">
            <StyledImage
              src={pro}
              alt="doosan"
              style={{ border: '2px white solid', borderRadius: '20%', opacity: '0.5' }}
            />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <StyledImage src={calibro} alt="calibro" />
          </Col>
          <Col md={6}>
            <Title>Diametro</Title>
            <Description>
              Un diametro preciso è fondamentale nella produzione di componenti meccanici, poiché
              influisce direttamente sul corretto funzionamento e sull'assemblaggio delle parti. Un
              diametro errato può causare usura prematura, vibrazioni indesiderate e
              malfunzionamenti nel sistema. Inoltre, la precisione dimensionale garantisce
              l'intercambiabilità delle parti, facilitando la manutenzione e la riparazione.
              Pertanto, mantenere tolleranze rigorose sul diametro è essenziale per garantire la
              qualità e l'affidabilità dei prodotti finali.
            </Description>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <Title>Precisione</Title>
            <Description>
              Il micrometro è uno strumento di precisione utilizzato per misurare dimensioni molto
              piccole, come spessori, diametri e profondità, con una precisione di solito fino a
              0,01 mm. È composto da un cilindro filettato e una scala graduata, permettendo di
              ottenere misurazioni estremamente precise. A differenza del calibro, che può misurare
              una gamma più ampia di dimensioni e ha una precisione inferiore (solitamente intorno a
              0,1 mm), il micrometro è specificamente progettato per misurazioni di alta precisione.
              Grazie alla sua costruzione robusta e alla capacità di misurare piccole variazioni, è
              essenziale in settori come la meccanica di precisione e l'ingegneria.
            </Description>
          </Col>
          <Col md={6} className="text-center">
            <StyledImage src={micrometro} alt="dmicrometro" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5">
        <CardsTech />
      </Container>
    </Section>
  );
};

export default Technologia;
