import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Technologia = (props) => {
  return (
    <section style={{ background: 'linear-gradient(lightgrey, red, black)' }}>
      <Container>
        <Row xs={1} md={2} lg={3}>
          <Col fluid className="py-5"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologia;
