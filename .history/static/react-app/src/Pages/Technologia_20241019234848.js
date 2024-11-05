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
  return <section style={{ background: 'linear-gradient(lightgrey, red, black)' }}></section>;
};

export default Technologia;
