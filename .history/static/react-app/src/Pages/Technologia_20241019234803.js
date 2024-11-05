import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import image1 from '../img/1.jpg'; // Ваши изображения
import image2 from '../img/5.jpg'; // Ваши изображения
import image3 from '../img/8.JPG'; // Ваши изображения
import Carousel from 'react-bootstrap/Carousel';

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  text-align: center;

  @media (max-width: 576px) {
    padding-top: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  max-width: 600px;
  margin: 0 auto 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledCarouselItem = styled(Carousel.Item)`
  height: 400px; // Высота карусели
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%; // Обеспечить адаптацию изображения по высоте
    object-fit: cover;
  }
`;

export const Technologia = () => {
  return (
    <section style={{ background: 'linear-gradient(lightgrey, red, black)' }}>
      <StyledContainer>
        <Title>Innovazione e Tecnologia nella CNC</Title>
        <Description>
          La nostra azienda, fondata 5 anni fa, si è rapidamente affermata nel settore CNC, grazie
          all'esperienza trentennale del nostro fondatore nella progettazione e produzione di
          componenti. Siamo dedicati all'innovazione continua e alla qualità, per garantire ai
          nostri clienti le soluzioni più avanzate.
        </Description>

        <Carousel>
          <StyledCarouselItem>
            <img src={image1} alt="Innovazione" />
            <Carousel.Caption>
              <h3>Innovazione in Azione</h3>
              <p>Le nostre tecnologie sono all'avanguardia nel settore CNC.</p>
            </Carousel.Caption>
          </StyledCarouselItem>
          <StyledCarouselItem>
            <img src={image2} alt="Precisione" />
            <Carousel.Caption>
              <h3>Precisione e Eccellenza</h3>
              <p>
                Ogni pezzo è realizzato con la massima precisione per garantire qualità e durata.
              </p>
            </Carousel.Caption>
          </StyledCarouselItem>
          <StyledCarouselItem>
            <img src={image3} alt="Automazione" />
            <Carousel.Caption>
              <h3>Automazione Intelligente</h3>
              <p>Le nostre soluzioni automatizzate migliorano l'efficienza del tuo business.</p>
            </Carousel.Caption>
          </StyledCarouselItem>
        </Carousel>

        <Subtitle>Il nostro impegno</Subtitle>
        <Description>
          Siamo impegnati a fornire un servizio eccellente, ascoltando le esigenze dei nostri
          clienti e offrendo soluzioni innovative che superano le aspettative. Con un mix di
          esperienza e tecnologia, siamo pronti a portare il tuo business a nuovi livelli di
          successo.
        </Description>

        <Button variant="success" style={{ margin: '2rem 0' }}>
          Contattaci
        </Button>
      </StyledContainer>
    </section>
  );
};

export default Technologia;
