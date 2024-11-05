import React from 'react';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container } from 'react-bootstrap';
import img from '../img/prodotti1.jpg';

const Prodotti = () => {
  return (
    <section
      style={{ background: 'linear-gradient(black,black,darkred,grey)', overflow: 'hidden' }}>
      <Container fluid className="py-5">
        <img
          src={img}
          alt="prodotti"
          className="img-fluid" // Этот класс делает изображение адаптивным
          style={{ width: '100%', height: 'auto', marginTop: '1rem' }} // Устанавливаем ширину 100% и высоту авто для сохранения пропорций
        />
        <ProdottiSlider />
      </Container>
    </section>
  );
};

export default Prodotti;
