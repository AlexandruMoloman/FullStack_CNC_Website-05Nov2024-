import React from 'react';
import styled from 'styled-components';
import { Container, Row, COl } from 'react-bootstrap';
import ScrollToTop from './ScrollToTop';

const Chat = (props) => {
  return (
    <Container fluid className="ppy-5">
      <iframe>
        <message>Ciao! Come posso aiutarti?</message>
      </iframe>
    </Container>
  );
};
