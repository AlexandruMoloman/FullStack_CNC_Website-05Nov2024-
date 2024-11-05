import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pneumatica from '../img/pneumatica.png';
import automotive from '../img/automotive.png';
import olio from '../img/Oliodinamica.png';
import varia from '../img/varia.png';
import { Col } from 'react-bootstrap';
import './ProdottiSlider.css'; // Подключите файл стилей

// Основной компонент карусели
export const ProdottiSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ backgroundColor: 'white' }}>
      <Carousel.Item>
        <img
          src={pneumatica}
          alt="Pneumatica"
          title="Pneumatica"
          loading="lazy"
          className="d-block mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Col className="mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3">
          <h3 className="display-6">Pneumatica</h3>
          <p className="lead">50%</p>
        </Col>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={automotive}
          alt="Automotive"
          title="Automotive"
          loading="lazy"
          className="d-block mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Col className="mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3">
          <h3 className="display-6">Automotive</h3>
          <p className="lead">20%</p>
        </Col>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={olio}
          alt="Oliodinamica"
          title="Oliodinamica"
          loading="lazy"
          className="d-block mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Col className="mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3">
          <h3 className="display-6">Oliodinamica</h3>
          <p className="lead">15%</p>
        </Col>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={varia}
          alt="Varia"
          title="Varia"
          loading="lazy"
          className="d-block mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Col className="mx-auto d-flex flex-column align-items-center justify-content-center text-center py-3">
          <h3 className="display-6">Varia</h3>
          <p className="lead">15%</p>
        </Col>
      </Carousel.Item>
    </Carousel>
  );
};
