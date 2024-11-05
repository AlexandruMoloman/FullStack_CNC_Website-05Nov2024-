import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Notizie = (props) => {
  return (
    <Container>
      <p style={{ paddingTop: '15%', color: 'black' }}>{props.text}</p>
      <Container>
        <p style={{ paddingTop: '15%', color: 'black' }}>{props.text}</p>
      </Container>
      <Container>
        <p style={{ paddingTop: '15%', color: 'black' }}>{props.text}</p>
      </Container>
    </Container>
  );
};
export default Notizie;
