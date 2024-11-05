import React from 'react';
import { ProdottiSlider } from './Components/ProdottiSlider';
import { Container } from 'react-bootstrap';
import img from './img/prodotti1.jpg';

const Prodotti = () => {
  return (
    <Container style={{ marginTop: 'rem' }}>
      <img
        src={img}
        alt="prodotti"
        className="img-fluid"
        style={{ width: '100%', marginTop: '1rem' }}
      />
      <ProdottiSlider />
    </Container>
  );
};

export default Prodotti;
