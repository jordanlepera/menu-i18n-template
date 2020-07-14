import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuArticle = props => {
  const { name, ing, price, capacity } = props;

  return (
    <Article>
      <Line>
        <Name>
          {name}
        </Name>
        <Capacity>
          {capacity}
        </Capacity>
        <Space />
        <Price>
          {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)}
        </Price>
      </Line>
      <Description>
        {ing}
      </Description>
      <CustomSection>
        {props.children}
      </CustomSection>
    </Article>
  );
};

const Article = styled.div`
  margin: 20px 20px 40px 20px;
  color: #3D3D3D;
  @media (max-width: 1024px) {
    margin: 20px;
  }
`;

const Line = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-size: 2em;
  font-weight: 800;
  border-bottom: 1px solid #3D3D3D;
  @media (max-width: 599px) {
    font-size: 1em;
  }
  @media (max-width: 1024px) and (min-width: 600px) {
    font-size: 1.5em;
  }
`;

const Capacity = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid #3D3D3D;
  align-self: flex-end;
  font-size: 2em;
  padding-left: 20px;
  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (max-width: 1024px) and (min-width: 600px) {
    font-size: 1.5em;
  }
`;

const Space = styled.span`
  width: 20px;
  border-bottom: 1px solid #3D3D3D;
`;

const Price = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid #3D3D3D;
  text-align: right;
  align-self: flex-end;
  font-size: 2em;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (max-width: 1024px) and (min-width: 600px) {
    font-size: 1.5em;
  }
`;

const Description = styled.div`
  font-size: 1.5em;
  font-weight: 300;
  margin-top: 8px;
  @media (max-width: 600px) {
    font-size: 0.9em;
  }
  @media (max-width: 1024px) and (min-width: 600px) {
    font-size: 1.3em;
  }
`;

const CustomSection = styled.div`
  font-size: 1.5em;
  font-weight: 300;
  margin-top: 10px;
  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (max-width: 1024px) and (min-width: 600px) {
    font-size: 1.3em;
  }
`;

MenuArticle.propTypes = {
  name: PropTypes.string,
  ing: PropTypes.string,
  price: PropTypes.number,
  capacity: PropTypes.string,
  children: PropTypes.node
};

export default MenuArticle;