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
        src="https://www.bing.com/maps?cp=45.725553%7E9.564076&lvl=18.8&style=h"
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
