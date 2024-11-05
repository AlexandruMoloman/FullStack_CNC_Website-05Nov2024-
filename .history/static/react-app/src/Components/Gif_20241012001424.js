import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import roema from '../gif/RoemaGif-speed.gif';

const GIF = () => {
  const [gifPlayed, setGifPlayed] = useState(false);

  useEffect(() => {
    const imgElement = document.getElementById('gif-element');

    // Используем таймаут для замены GIF на статичное изображение после определенного времени
    imgElement.addEventListener('load', () => {
      setTimeout(() => {
        setGifPlayed(true); // Заменяем GIF на статичное изображение
      }, 3000); // Время ожидания (например, 3000 мс = 3 секунды)
    });
  }, []);

  return (
    <Container fluid className="py-4" style={{ width: '100%' }}>
      <img
        id="gif-element"
        src={gifPlayed ? 'path_to_static_image' : roema}
        alt="Adaptive GIF"
        className="img-fluid"
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
