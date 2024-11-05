import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 450px; /* Задаем фиксированную высоту для контейнера карты */
  border: none;
`;

const Map = () => {
  return (
    <MapContainer>
      <iframe
        title="Location Map"
        src="https://www.bing.com/maps?osid=4ceae012-0d9f-4a8d-ae96-a4e637fc9eb0&cp=45.725553~9.56329&lvl=18.759972&style=h&pi=0&imgid=a6fccf0b-af94-4e82-8b24-938b256ab120&v=2&sV=2&form=S00027"
        width="100%"
        height="100%" /* Меняем высоту iframe на 100% для корректного отображения */
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </MapContainer>
  );
};

export default Map;
