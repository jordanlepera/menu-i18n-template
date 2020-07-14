import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <ImgBanner
      src="/sallev4.jpg"
      alt="Mamma Giovanna restaurant room"
    />
  );
};

const ImgBanner = styled.img`
  margin-top: 64px;
  width: 100%;
  @media (max-width: 500px) {
    margin-top: 221px;
  }
`;

export default Banner;