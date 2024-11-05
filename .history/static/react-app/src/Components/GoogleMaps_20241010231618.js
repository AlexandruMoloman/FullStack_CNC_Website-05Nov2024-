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
        src="https://maps.app.goo.gl/U33fkteU6P7mKX727"
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
