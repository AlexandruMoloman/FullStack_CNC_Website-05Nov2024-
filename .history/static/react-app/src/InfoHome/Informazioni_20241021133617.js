import React from 'react';
import ContentHome from './ContentHome';
import Cards from '../Components/Cards';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  @media (max-width: 320px) {
    margin-top: 0rem;
  }
`;

const Title = styled.h1`
  border-left: 5px darkRed solid;
  margin-top: 2.7rem;
  margin-left: 0.2rem;
  padding-left: 1rem;
`;

const Informazioni = (props) => {
  return (
    <>
      <StyledContainer className="py-5">
        <Title>
          {ContentHome.map((info) => (
            <p key={info.titleInformazioni}>{info.titleInformazioni}</p>
          ))}
        </Title>
      </StyledContainer>

      <StyledContainer className="py-5">
        <Cards />
      </StyledContainer>
    </>
  );
};

export default Informazioni;
