import React from 'react';
import { Col } from 'react-bootstrap';

const ImageSection = ({ imgSrc, altText }) => {
  return (
    <Col md={6}>
      <img
        src={imgSrc}
        alt={altText}
        className="img-fluid mt-2"
        style={{ width: '100%', marginTop: '1rem' }}
      />
    </Col>
  );
};

export default ImageSection;
