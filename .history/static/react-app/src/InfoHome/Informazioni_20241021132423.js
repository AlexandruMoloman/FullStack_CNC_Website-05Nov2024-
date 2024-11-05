import React from 'react';
import ContentHome from './ContentHome';

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
