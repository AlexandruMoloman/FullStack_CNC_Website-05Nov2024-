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
        src="https://www.bing.com/maps?osid=eaa0f919-dd4d-4372-a665-d5822b4fce5e&cp=45.725438~9.56286&lvl=19.477797&style=h&pi=0&imgid=be450c40-26e6-47e7-b7dd-03f3d8329eb2&v=2&sV=2&form=S00027"
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
