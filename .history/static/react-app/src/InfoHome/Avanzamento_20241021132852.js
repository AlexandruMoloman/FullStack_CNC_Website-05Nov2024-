import React from 'react';
import ContentHome from './ContentHome';
import biglia from '../img/biglia.png';
import { Container, Col, Row } from 'react-bootstrap';

const Avanzamento = (props) => {
  return (
    <>
      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(white, red, white)', minHeight: '95vh' }}>
        <Title style={{ color: 'black' }}>
          {ContentHome.map((info) => (
            <p key={info.titleAvanzamento}>{info.titleAvanzamento}</p>
          ))}
        </Title>

        <Row xs={1} md={1} lg={2}>
          <Col md={6}>
            <Text style={{ color: 'black' }}>
              {ContentHome.map((info) => (
                <p key={info.textI}>{info.textAvanzamentoUp}</p>
              ))}
              <p>
                <ul>
                  <li>Oliodinamica</li>
                  <li>Aerodinamica</li>
                  <li>Automotive</li>
                  <li>Pneumatica</li>
                </ul>
                {ContentHome.map((info) => (
                  <p key={info.textI}>{info.textAvanzamentoDown}</p>
                ))}
              </p>
            </Text>
          </Col>

          <Col md={6}>
            <img
              src={biglia}
              alt="Biglia"
              className="img-fluid"
              style={{
                width: '100%',
                marginTop: '3rem',
                border: '10px solid white',
                borderRadius: '20% 50% 20% 50%',
                opacity: '0.8',
              }}
            />
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
};

export default Avanzamento;
