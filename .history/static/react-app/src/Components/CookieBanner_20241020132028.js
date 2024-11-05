import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const CookieBannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to right, black, darkred);
  color: white;
  text-align: center;
  padding: 1rem;
  z-index: 1000;
`;

const CookieBanner = (props) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAcceptCookies = (props) => {
    setShowBanner(false);
  };
  if (!showBanner) return null;

  return (
    <CookieBannerWrapper>
      <p>
        {' '}
        Questo sito utilizza i cookie per migliorare l'esperienza di navigazione e per fornire
        funzionalità aggiuntive. Continuando a navigare sul sito, accetti l'uso dei cookie.
      </p>
      <Button variant="primary" onClick={handleAcceptCookies}>
        Acceto
      </Button>
    </CookieBannerWrapper>
  );
};
