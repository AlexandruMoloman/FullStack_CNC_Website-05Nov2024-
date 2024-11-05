import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pneumatica from '../img/pneumatica.png';
import automotive from '../img/automotive.png';
import olio from '../img/Oliodinamica.png';
import varia from '../img/varia.png';

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
        <Carousel.Caption className="bg-dark bg-opacity-50 p-3" style={{ bottom: '20px' }}>
          <h3 className="text-white">Pneumatica</h3>
          <p className="text-white">50%</p>
        </Carousel.Caption>
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
        <Carousel.Caption className="bg-dark bg-opacity-50 p-3" style={{ bottom: '20px' }}>
          <h3 className="text-white">Automotive</h3>
          <p className="text-white">20%</p>
        </Carousel.Caption>
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
        <Carousel.Caption className="bg-dark bg-opacity-50 p-3" style={{ bottom: '20px' }}>
          <h3 className="text-white">Oliodinamica</h3>
          <p className="text-white">15%</p>
        </Carousel.Caption>
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
        <Carousel.Caption className="bg-dark bg-opacity-50 p-3" style={{ bottom: '20px' }}>
          <h3 className="text-white">Varia</h3>
          <p className="text-white">15%</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
