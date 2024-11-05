import React from 'react';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../img/prodotti1.jpg';
import styled from 'styled-components';

const StyledSection = styled.section`
  background: linear-gradient(black, black, darkred, grey);
  padding: 2rem 0;
`;

const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Prodotti = () => {
  return (
    <StyledSection>
      <Container fluid>
        <Row>
          <Col md={12}>
            <img
              src={img}
              alt="prodotti"
              className="img-fluid"
              style={{ width: '100%', marginTop: '1rem' }}
            />
          </Col>
        </Row>

        <ProdottiSlider />
      </Container>
    </StyledSection>
  );
};

export default Prodotti;
