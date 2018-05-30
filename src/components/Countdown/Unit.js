import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../../util/i18n';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 5px; padding: 5px;
  min-width: 60px;
  color: #212121;
  font-size: 11px; text-align: center;
  border: 1px solid;
`;

const Count = styled.span`
  display: block;
  margin-bottom: 3px;
  font-size: 36px; font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Label = styled.span`
  opacity: 0.5;
  text-transform: uppercase; font-size: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const TimeUnit = ({ value, label, lang }) => {
  const shouldPad = label.includes('hours')
    || label.includes('minutes')
    || label.includes('seconds')
    || label.includes('days')
    || label.includes('months');
  return (
    <Wrap>
      <Count>{ shouldPad ? String(value).padStart(2, '0') : value }</Count>
      { label && (<Label>{translate(lang, label)}</Label>) }
    </Wrap>
  );
}
TimeUnit.displayName = 'TimeUnit';
TimeUnit.propTypes = {
  value: PropTypes.number.isRequired,
  lang: PropTypes.string,
  label: PropTypes.string
}
TimeUnit.defaultProps = {
  lang: 'en',
  label: ''
}

export default TimeUnit;