import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import img from '../img/prodotti1.jpg';
import styled from 'styled-components';
import ale from '../img/Ale.jpg';

const StyledImage = styled.img`
  width: 100%; /* Ширина изображения на 100% */
  height: auto;
  max-height: 50vh; /* Ограничиваем максимальную высоту */
  object-fit: cover; /* Сохраняем пропорции изображения */
  margin-top: 1rem;
  border-radius: 20px; /* Закругленные углы */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Тень для глубины */
`;

const StyledSection = styled.section`
  background: linear-gradient(black, black, darkred, grey);
  min-height: 100vh; /* Устанавливаем минимальную высоту */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Центрируем содержимое */
  align-items: center; /* Центрируем содержимое по горизонтали */
`;

const Prodotti = () => {
  return (
    <StyledSection>
      <Container fluid className="py-5">
        <StyledImage src={img} alt="prodotti" />
      </Container>
      <Container>
        <Col>
          <Container className="py-5">
            <StyledImage src={ale} alt="Описание изображения" />
          </Container>
        </Col>
      </Container>
      <ProdottiSlider />
    </StyledSection>
  );
};

export default Prodotti;
