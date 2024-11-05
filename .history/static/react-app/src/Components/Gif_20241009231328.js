import React from 'react';
import { Container } from 'react-bootstrap';
import roema from '../gif/RoemaGif-speed.gif';

const GIF = () => {
  return (
    <Container fluid className="py-2" style={{ width: '100%', border: 'black solid 35px' }}>
      <img
        src={roema}
        alt="Adaptive GIF"
        className="img-fluid" // Класс 'img-fluid' делает изображение адаптивным
        style={{
          maxWidth: '100%',
          height: 'auto',
          marginTop: '7rem',
          background: 'linear-gradient(to right, darkred, black)',
        }}
      />
    </Container>
  );
};

export default GIF;
