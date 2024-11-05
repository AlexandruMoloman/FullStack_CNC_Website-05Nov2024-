// src/pages/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Gif from '../Components/Gif';
import Cards from '../Components/Cards';
import Map from '../Components/GoogleMaps';
import ContentHome from '../InfoHome/ContentHome';
import InfoSection from '../InfoHome/InfoSection';

const StyledContainer = styled(Container)`
  @media (max-width: 320px) {
    margin-top: 0rem;
  }
`;

const Home = () => {
  const handleLearnMoreClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Gif />
      <StyledContainer className="py-5">
        <h1>Informazioni</h1>
      </StyledContainer>

      <Cards />

      {ContentHome.map((info, index) => (
        <InfoSection
          key={index}
          title={info.title}
          text={info.text}
          services={info.services}
          imgSrc={info.imgSrc}
        />
      ))}

      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(to right, red, black)' }}>
        <Button variant="primary" onClick={handleLearnMoreClick}>
          Scopri di Piu
        </Button>
        <Map />
      </Container>
    </>
  );
};

export default Home;
