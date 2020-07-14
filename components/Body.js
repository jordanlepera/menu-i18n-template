import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = props => {

  return (
    <BodyStyled>
      <Content>
        {props.children}
      </Content>
    </BodyStyled>
  );
};

const BodyStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Content = styled.section`
  max-width: 1200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

Body.propTypes = {
  children: PropTypes.node
};

export default Body;