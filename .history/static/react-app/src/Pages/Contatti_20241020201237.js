import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Chat from '../Components/Chat';

const Contatti = (props) => {
  return (
    <section fluid className="py-5">
      <Container
        fluid
        className="py-5"
        style={{
          background: 'linear-gradient(black, darkred, black)',
          minHeight: '100vh',
          marginTop: '2rem',
        }}>
        <Row className="justify-content-center mb-4 py-5">
          <Col md={8} className="text-center">
            <p style={{ color: 'white', fontSize: '3rem' }}>Chatta con noi in tempo reale!</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Chat />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contatti;
