import React from 'react';
import { Container } from 'react-bootstrap';
import ImageCollage from '../Components/Colage';
import CardsForTech from '../Components/CardsTech';

import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  text-align: center;

  @media (max-width: 576px) {
    padding-top: 1rem;
  }
`;

export const Technologia = () => {
  return (
    < style={{ background: 'linear-gradient(to right,red,black)' }}>
      <StyledContainer>
        <ImageCollage />
        <Container fluid className="py-4">
          <CardsForTech />
        </Container>
      </StyledContainer>
    </>
  );
};

export default Technologia;
