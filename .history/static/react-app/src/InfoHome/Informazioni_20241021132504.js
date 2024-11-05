import React from 'react';
import ContentHome from './ContentHome';
import Cards from '../Components/Cards';

const StyledContainer = styled(Container)`
  @media (max-width: 320px) {
    margin-top: 0rem;
  }
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
