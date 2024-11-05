import React from 'react';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../img/prodotti1.jpg';
import styled from 'styled-components';

const StyledSection = styled.section`
  background: linear-gradient(black, black, darkred, grey);
  padding: 2rem 0;
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
