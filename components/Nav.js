import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SelectCountry from './CountrySelect';

const Nav = props => {
  const { lang } = props;

  return (
    <>
      <NavBar>
        <NavToolbar>
          <Title>
            O&apos;rabbit&apos;s
            <br />
            IRISH PUB
          </Title>
          <SelectCountry lang={lang} />
        </NavToolbar>
      </NavBar>
    </>
  );
};

Nav.propTypes = {
  lang: PropTypes.string,
};

const Title = styled.div`
  text-transform: uppercase;
  margin: 0 30px;
  font-size: 20px;
  flex-grow: 1;
  font-weight: 600;
  @media (max-width: 500px) {
    margin-bottom: 15px;
    text-align: center;
  }
`;

const NavBar = styled(AppBar)`
  background-color: #424242;
  @media (max-width: 500px) {
    min-height: 150px;
    padding: 20px;
  }
`;

const NavToolbar = styled(Toolbar)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default Nav;
