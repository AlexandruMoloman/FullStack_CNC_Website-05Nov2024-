import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pneumatica from '../img/pneumatica.png';
import automotive from '../img/automotive.png';
import olio from '../img/Oliodinamica.png';
import varia from '../img/varia.png';
import styled from 'styled-components';

// Стили для центрирования изображений
const StyledCarouselItem = styled(Carousel.Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Задайте высоту карусели по своему усмотрению */
`;

const StyledImage = styled.img`
  max-width: 100%; /* Ограничивает ширину изображения */
  height: auto; /* Сохраняет пропорции изображения */
  object-fit: cover; /* Заполняет контейнер, сохраняя пропорции */
`;

export const ProdottiSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ backgroundColor: 'white' }}>
      <StyledCarouselItem>
        <StyledImage
          src={pneumatica}
          alt="Pneumatica"
          title="Pneumatica"
          loading="lazy" // Ленивая загрузка
          width={200} // Ширина изображения
          height={100} // Высота изображения
        />
        <Carousel.Caption>
          <h3>Pneumatica</h3>
          <p>50%</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <StyledImage
          src={automotive}
          alt="Automotive"
          title="Automotive"
          loading="lazy"
          width={200}
          height={100}
        />
        <Carousel.Caption>
          <h3>Automotive</h3>
          <p>20%</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <StyledImage
          src={olio}
          alt="Oliodinamica"
          title="Oliodinamica"
          loading="lazy"
          width={800}
          height={600}
        />
        <Carousel.Caption>
          <h3>Oliodinamica</h3>
          <p>15%</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <StyledImage
          src={varia}
          alt="Varia"
          title="Varia"
          loading="lazy"
          width={800}
          height={600}
        />
        <Carousel.Caption>
          <h3>Varia</h3>
          <p>15%</p>
        </Carousel.Caption>
      </StyledCarouselItem>
    </Carousel>
  );
};
