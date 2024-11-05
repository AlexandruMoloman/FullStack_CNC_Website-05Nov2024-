import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Notizie = (props) => {
  return (
    <Container style={{ paddingTop: '15px' }}>
      <p>{props.text}</p>
    </Container>
  );
};
export default Notizie;
