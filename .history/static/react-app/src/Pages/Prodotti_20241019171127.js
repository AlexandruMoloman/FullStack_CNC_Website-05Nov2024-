import React from 'react';
import { ProdottiSlider } from '../Components/ProdottiSlider';
import { Container } from 'react-bootstrap';
import img from '../img/prodotti1.jpg';

const Prodotti = () => {
  return (
    <section style={{ background: 'linear-gradient(black,black,darkred,grey)' }}>
      <Container fluid className="py-5">
        <img
          src={img}
          alt="prodotti"
          className="img-fluid"
          style={{
            width: '100vw', // Задает ширину 100% от ширины окна
            position: 'relative', // Устанавливаем для корректного позиционирования
            left: '50%', // Центрируем изображение
            right: '50%',
            marginLeft: '-50vw', // Убираем половину ширины окна
            marginRight: '-50vw', // Убираем половину ширины окна
            marginTop: '1rem',
          }}
        />
        <ProdottiSlider />
      </Container>
    </section>
  );
};

export default Prodotti;
