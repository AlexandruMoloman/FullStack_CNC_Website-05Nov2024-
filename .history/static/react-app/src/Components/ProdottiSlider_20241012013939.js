import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pneumatica from '../img/pneumatica.png';
import automotive from '../img/automotive.png';
import olio from '../img/Oliodinamica.png';
import varia from '../img/varia.png';
import { Col } from 'react-bootstrap';

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
          style={{ maxWidth: '100%', height: 'auto', width: '200px' }}
        />
        <Col
          className="mx-auto d-flex flex-column align-items-center justify-content-center"
          style={{ color: 'black', height: '100px' }} // Установите фиксированную высоту, если необходимо
        >
          <h3 className="text-center">Pneumatica</h3>
          <p className="text-center">50%</p>
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={automotive}
          alt="Automotive"
          title="Automotive"
          loading="lazy"
          className="d-block mx-auto"
          style={{ maxWidth: '100%', height: 'auto', width: '200px' }}
        />
         <Col
          className="mx-auto d-flex flex-column align-items-center justify-content-center"
          style={{ color: 'black', height: '100px' }} // Установите фиксированную высоту, если необходимо
        >
          <h3>Automotive</h3>
          <p>20%</p>
          </Col>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={olio}
          alt="Oliodinamica"
          title="Oliodinamica"
          loading="lazy"
          className="d-block mx-auto"
          style={{ maxWidth: '100%', height: 'auto', width: '200px' }}
        />
        <Col
          className="mx-auto d-flex flex-column align-items-center justify-content-center"
          style={{ color: 'black', height: '100px' }} // Установите фиксированную высоту, если необходимо
        >
          <h3>Oliodinamica</h3>
          <p>15%</p>
          </Col>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={varia}
          alt="Varia"
          title="Varia"
          loading="lazy"
          className="d-block mx-auto"
          style={{ maxWidth: '100%', height: 'auto', width: '200px' }}
        />
        <Col
          className="mx-auto d-flex flex-column align-items-center justify-content-center"
          style={{ color: 'black', height: '100px' }} // Установите фиксированную высоту, если необходимо
        >
          <h3>Varia</h3>
          <p>15%</p>
          </Col>
      </Carousel.Item>
    </Carousel>
  );
};
