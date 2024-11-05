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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.509176474941!2d9.563620526599609!3d45.72494599309018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781535a7f918c6d%3A0x768b1d5ec2a30810!2sOFFICINE%20RO.E.MA.%20MECCANICA%20DI%20PRECISIONE!5e0!3m2!1sru!2sit!4v1728594957111!5m2!1sru!2sit"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </MapContainer>
  );
};

export default Map;
