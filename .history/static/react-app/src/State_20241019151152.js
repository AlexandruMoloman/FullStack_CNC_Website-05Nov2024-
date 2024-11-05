import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notizie from './Pages/Notizie';
import { Container } from 'react-bootstrap';

function State() {
  return (
    <Container>
      <h1>Pagina Notizie</h1>
      <Notizie text="i am Notizie" />
    </Container>
  );
}
