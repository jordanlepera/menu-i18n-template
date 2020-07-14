import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuSubSection = props => {
  const { title } = props;
  return (
    <Section>
      <Title>
        {title}
      </Title>
      {props.children}
    </Section>
  );
};

const Section = styled.div`
  margin: 0px 10px 10px 0px;
  padding: 20px;
  color: #3D3D3D;
  @media (max-width: 1024px) {
    margin: 10px;
  }
`;

const Title = styled.div`
  font-size: 2.5em;
  text-align: left;
  text-transform: uppercase;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 2em;
  }
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

MenuSubSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default MenuSubSection;