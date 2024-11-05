import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Notizie = (props) => {
  return (
    <Container className="mt-5 px-5">
      <p>{props.text}</p>
    </Container>
  );
};
export default Notizie;
