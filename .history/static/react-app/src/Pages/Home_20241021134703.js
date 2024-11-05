import React from 'react';
import Gif from '../Components/Gif';
import img from '../img/DJI_0346.jpg';
import CookieBanner from '../Components/CookieBanner';
import ScrollToTop from '../Components/ScrollToTop';
import Informazioni from '../InfoHome/Informazioni';
import Avanzamento from '../InfoHome/Avanzamento';
import DownContent from '../InfoHome/DownContent';
import Footer from '../InfoHome/Footer';
import { Container } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
      <Gif />
      <Informazioni />
      <Avanzamento />
      <Container fluid className="py-5">
        <img
          src={img}
          alt="Azienda"
          className="img-fluid mt-2"
          style={{ width: '100%', marginTop: '1rem' }}
        />
      </Container>
      <DownContent />
      <Footer />
      <CookieBanner />
      <ScrollToTop />
    </>
  );
};

export default Home;
