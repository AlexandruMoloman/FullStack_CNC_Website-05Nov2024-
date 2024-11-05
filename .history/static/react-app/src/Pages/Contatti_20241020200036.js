import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Chat from '../Components/Chat';
const Contatti = (props) => {
  return (
    <Container fluid className="py-5">
      <Chat />
    </Container>
  );
};
export default Contatti;
