import React from 'react';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container } from 'react-bootstrap';
import img from './img/prodotti1.jpg';

const Prodotti = () => {
  return (
    <Container style={{ marginTop: '5rem', maxWidth: '100%', backgroundColor: 'black' }}>
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
