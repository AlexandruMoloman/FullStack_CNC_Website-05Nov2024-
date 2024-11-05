import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
const Subtitle = styled.h2`
  font-size: 2rem;
`;

const Text = styled.p`
  font-size: 1.25rem;
`;
const DownContent = (props) => {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <Subtitle>
              {ContentHome.map((info) => (
                <p key={info.title}>{info.title}</p>
              ))}
            </Subtitle>
            <Text>
              {ContentHome.map((info) => (
                <p key={info.text}>{info.text}</p>
              ))}
            </Text>

            <ul className="fs-4">
              <li>Tornitura e fresatura di altissima precisione con macchine fino a 9 assi</li>
              <li>Trattamenti superficiali</li>
              <li>
                Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
                ferro-nichel e titanio
              </li>
            </ul>
            <Text>
              <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
            </Text>
            <Text>Su richiesta viene effettuata la campionatura del pezzo finale</Text>
            <Button variant="primary" className="fs-4" onClick={handleLearnMoreClick}>
              Scopri di Piu
            </Button>
          </Col>

          <Col md={6}>
            <img
              src={azienda}
              alt="Azienda"
              className="img-fluid mt-2"
              style={{ width: '100%', marginTop: '1rem' }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DownContent;
