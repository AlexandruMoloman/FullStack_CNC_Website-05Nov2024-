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
      style={{ background: 'linear-gradient(to right, red, black)' }}></Container>
  );
};
