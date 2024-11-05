import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Chat from '../Components/Chat';

const Contatti = (props) => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        background: 'linear-gradient(black, darkred, black)',
        minHeight: '100vh',
      }}>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 style={{ color: 'grey', fontSize: '3rem' }}>Contattaci</h1>
          <p style={{ color: 'grey', fontSize: '1.2rem' }}>Chatta con noi in tempo reale!</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Chat />
        </Col>
      </Row>
    </Container>
  );
};

export default Contatti;
