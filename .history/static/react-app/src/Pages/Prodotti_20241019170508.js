import React from 'react';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container } from 'react-bootstrap';
import img from '../img/prodotti1.jpg';

const Prodotti = () => {
  return (
    <section style={{ background: 'linear-gradient(black,black,darkred,grey)' }}>
      <Container style={{ marginTop: '5rem', maxWidth: '100%' }}>
        <img
          src={img}
          alt="prodotti"
          className="img-fluid"
          style={{ width: '100%', marginTop: '1rem' }}
        />
        <ProdottiSlider />
      </Container>
    </section>
  );
};

export default Prodotti;
