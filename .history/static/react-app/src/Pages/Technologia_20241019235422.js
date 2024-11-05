import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Technologia = (props) => {
  return (
    <section
      className="navbar navbar-expand-lg"
      style={{ background: 'linear-gradient(lightgrey, red, black)' }}>
      <Container fluid className="py-5 ">
        <Row xs={1} md={2} lg={3}>
          <Col fluid className="py-5"></Col>
          <Button className="py-5" type="submit" variant="primary">
            Send
          </Button>
        </Row>
      </Container>
    </section>
  );
};

export default Technologia;
