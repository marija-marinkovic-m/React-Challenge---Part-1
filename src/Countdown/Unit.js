import React from 'react';
import PropTypes from 'prop-types';
import LangContext, { translate } from '../util/i18n';

const TimeUnit = ({ value, label }) => (
  <div>
    <span>{ value }</span>
    { label && (
    <LangContext.Consumer>
      { lang => <span>{translate(lang, label)}</span> }
    </LangContext.Consumer>
    ) }
  </div>
);
TimeUnit.displayName = 'TimeUnit';
TimeUnit.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string
}

export default TimeUnit;