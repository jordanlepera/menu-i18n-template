import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from "next/dynamic";
import styled from 'styled-components';
import _uniqueId from 'lodash/uniqueId';
import Router from 'next-translate/Router'
import i18nConfig from '../i18n.json';

//Remove use of ssr fo this component because it creates an error in the console
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});


const CountrySelect = props => {
  const { lang } = props;

  const languageOptions = [
    { value: 'fr', label: '🇫🇷 Français' },
    { value: 'en', label: '🇬🇧 English' },
    { value: 'de', label: '🇩🇪 Deutsch' },
    { value: 'it', label: '🇮🇹 Italiano' }
  ];

  const handleChange = (selectedOption) => {
    Router.pushI18n({ url: '/', options: { lang: selectedOption.value } })
  };

  return (
    <SelectCountry
      className="basic-single"
      classNamePrefix="select"
      defaultValue={languageOptions[0]}
      isClearable={false}
      isSearchable={false}
      name="language"
      value={languageOptions.find(o => o.value === lang)}
      options={languageOptions}
      onChange={handleChange}
    />
  );
};

CountrySelect.propTypes = {
  lang: PropTypes.string
}

const SelectCountry = styled(Select)`
  font-family: Roboto;
  width: 200px;
  color: black;
`;

export default CountrySelect;