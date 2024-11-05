import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import ImageSection from './ImageSection';
import ServiceList from './ServiceList';

const Title = styled.h2`
  font-size: 2rem;
`;

const Text = styled.p`
  font-size: 1.25rem;
`;

const InfoSection = ({ title, text, imgSrc, services }) => {
  return (
    <Container
      fluid
      className="text-white py-5"
      style={{ background: 'linear-gradient(to right, red, black)' }}>
      <Title>{title}</Title>
      <Row xs={1} md={2}>
        <Col md={6}>
          {text.map((paragraph, idx) => (
            <Text key={idx}>{paragraph}</Text>
          ))}
          {services && <ServiceList services={services} />}
        </Col>
        <ImageSection imgSrc={imgSrc} altText={title} />
      </Row>
    </Container>
  );
};

export default InfoSection;
