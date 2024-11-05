import React from 'react';
import { Col } from 'react-bootstrap';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container } from 'react-bootstrap';
import img from '../img/prodotti1.jpg';
import styled from 'styled-components';
import ale from '../img/Ale.jpg';

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
          <StyledImageContainer className="py-5">
            <img src={ale} className="img-fluid" alt="Описание изображения" />
          </StyledImageContainer>
        </Col>
      </Container>
      <ProdottiSlider />
    </StyledSection>
  );
};

export default Prodotti;
