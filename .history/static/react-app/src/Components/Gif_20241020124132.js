import React from 'react';
import { Container } from 'react-bootstrap';
import roema from '../gif/RoemaGif-speed.gif';

const GIF = () => {
  return (
    <Container fluid className="py-5" style={{ width: '100%' }}>
      <img
        src={roema}
        alt="Adaptive GIF"
        className="img-fluid" // Класс 'img-fluid' делает изображение адаптивным
        style={{
          maxWidth: '100%',
          height: 'auto',
          marginTop: '7rem',
          background: 'linear-gradient(white, black, darkred, white)',
        }}
      />
    </Container>
  );
};

export default GIF;
