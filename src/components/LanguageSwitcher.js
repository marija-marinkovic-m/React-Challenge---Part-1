import React from 'react';
import PropType from 'prop-types';
import RadioInput from './RadioInput';

const LanguageSwitcher = ({languages, onChange, value}) => {
  if (!languages.length) return null;
  
  return (<div>
    { languages.map(lang => <RadioInput
      key={lang}
      label={lang}
      name="lang"
      value={lang}
      checked={lang === value}
      onChange={onChange.bind(null, lang)}
    />) }
  </div>);
}

LanguageSwitcher.propTypes = {
  languages: PropType.arrayOf(PropType.string),
  onChange: PropType.func,
  value: PropType.string
}
LanguageSwitcher.defaultProps = {
  languages: [],
  onChange: () => {},
  value: ''
}
export default LanguageSwitcher;