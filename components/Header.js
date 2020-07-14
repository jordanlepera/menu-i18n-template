import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const Header = props => {
  const { lang } = props;

  return (<Nav lang={lang} />);
};

Header.propTypes = {
  lang: PropTypes.string
};

export default Header;