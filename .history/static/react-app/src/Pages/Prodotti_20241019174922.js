import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProdottiSlider } from '../Components/ProdottiSlider';

import img from '../img/prodotti1.jpg';
import styled from 'styled-components';
import ale from '../img/Ale.jpg';

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
  height: auto;
  max-height: 50vh; /* Ограничиваем максимальную высоту */
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

const Prodotti = () => {
  return (
    <StyledSection>
      <Container fluid className="py-5">
        <StyledImage src={img} alt="prodotti" />
      </Container>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <RoundImage src={ale} alt="Описание изображения" className="img-fluid" />
          </Col>
          <Subtitle>I nostri Prodotti CNC</Subtitle>
          <Text>
            "I nostri prodotti CNC rappresentano una combinazione perfetta di tecnologie avanzate e
            precisione, garantendo risultati eccezionali per i settori più esigenti. Ogni dettaglio
            è realizzato con precisione impeccabile, assicurando affidabilità e durata nell'uso.
            Siamo orgogliosi che le nostre soluzioni CNC permettano ai clienti di raggiungere la
            massima efficienza e produttività. Sviluppi innovativi e un rigoroso controllo qualità
            fanno dei nostri prodotti la scelta ideale per i professionisti. Offri al tuo business
            l'opportunità di beneficiare dei vantaggi delle alte tecnologie e dell'alta qualità."
          </Text>
        </Row>
      </Container>
      <ProdottiSlider />
    </StyledSection>
  );
};

export default Prodotti;
