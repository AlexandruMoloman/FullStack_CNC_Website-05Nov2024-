import Carousel from 'react-bootstrap/Carousel';
import big1 from '../img/b1.png';
import ok15 from '../img/ok15.png';
import dos1 from '../img/dos1.png';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  padding-top: 0rem;
  max-width: 1600px;
  margin: 2rem auto 0;

  @media (max-width: 768px) {
    max-width: 100%; /* Полная ширина для мобильных экранов */
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 5%; /* Сужаем кнопки управления */
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачные стрелки */
    border-radius: 50%; /* Круглые стрелки */
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
    border-radius: 10px;
    padding: 1rem;
    bottom: 20%; /* Поднимаем текст выше */
  }

  h5 {
    font-size: 1.75rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8); /* Тень для текста */
  }

  p {
    font-size: 1.25rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); /* Тень для описания */
  }
`;

const StyledCarouselItem = styled(Carousel.Item)`
  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease; /* Плавная анимация */
  }

  &:hover img {
    transform: scale(1.05); /* Легкое увеличение при наведении */
  }
`;

function ImageCollage() {
  return (
    <StyledCarousel data-bs-theme="dark" interval={2000} controls touch>
      <StyledCarouselItem>
        <img className="d-block w-50 mx-auto" src={big1} alt="First slide" />
      </StyledCarouselItem>

      <StyledCarouselItem>
        <img className="d-block w-50 mx-auto" src={ok15} alt="Second slide" />
      </StyledCarouselItem>

      <StyledCarouselItem>
        <img className="d-block w-50 mx-auto" src={dos1} alt="Third slide" />
      </StyledCarouselItem>
    </StyledCarousel>
  );
}

export default ImageCollage;
