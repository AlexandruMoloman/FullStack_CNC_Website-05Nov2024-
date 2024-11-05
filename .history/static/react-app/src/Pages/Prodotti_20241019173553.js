import React from 'react';
import { Col } from 'react-bootstrap';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container } from 'react-bootstrap';
import img from '../img/prodotti1.jpg';
import styled from 'styled-components';
import ale from '../img/Ale.jpg';

const StyledImage = styled.img`
  width: 55vh; /* Ширина изображения */
  border-radius: 20px; /* Закругленные углы */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Тень для глубины */
  position: relative;
  z-index: 1; /* Позиционирование для наложения */

  /* Создание полупрозрачных углов */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(255, 255, 255, 0.5); /* Полупрозрачный эффект */
    border-radius: 20px; /* Закругленные углы */
    z-index: -1; /* Позади изображения */
  }
`;

const StyledSection = styled.section`
  background: linear-gradient(black, black, darkred, grey);
  min-height: 100vh; /* Устанавливаем минимальную высоту */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Центрируем содержимое */
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 50vh; /* Ограничиваем максимальную высоту */
  object-fit: cover; /* Позволяет изображению сохранять пропорции */
  margin-top: 1rem;
`;

const Prodotti = () => {
  return (
    <StyledSection>
      <Container fluid className="py-5">
        <StyledImage src={img} alt="prodotti" className="img-fluid py-5 " />
      </Container>
      <Container>
        <Col>
          <Container className="py-5">
            <StyledImge src={ale} className="img-fluid" alt="Описание изображения" />
          </Container>
        </Col>
      </Container>
      <ProdottiSlider />
    </StyledSection>
  );
};

export default Prodotti;
