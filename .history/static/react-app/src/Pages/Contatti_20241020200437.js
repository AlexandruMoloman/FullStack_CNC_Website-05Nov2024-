import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Chat from '../Components/Chat';
const Contatti = (props) => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ background: 'linear-gradient(black,darkred,black)' }}>
      <Chat className="py-5" />
    </Container>
  );
};
export default Contatti;
