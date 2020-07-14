import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import _uniqueId from 'lodash/uniqueId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <FooterFlex>
        <FooterContainer>
          <GoTopBlock>
            <GoUpButton onClick={() => window.scrollTo(0, 0)}>
              <SocialIcon icon={faArrowAltCircleUp} />
              {t('common:go-to-top')}
            </GoUpButton>
          </GoTopBlock>
        </FooterContainer>
      </FooterFlex>
    </footer>
  );
};

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 5vh;
  color: white;
  margin-bottom: 10px;
`;

const GoUpButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .MuiButton-label {
      flex-direction: column;
      line-height: 1em;
      text-transform: none;
      color: white;
    }
`;

const GoTopBlock = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  width: 33.33%;
`;

const FooterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #3D3D3D;
  padding-top: 30px;
  color: white;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 1200px;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export default Footer;