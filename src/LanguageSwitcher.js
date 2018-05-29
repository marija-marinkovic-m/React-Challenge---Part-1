import React from 'react';
import PropType from 'prop-types';
import LangContext, { translate } from './util/i18n';

const LanguageSwitcher = ({languages, onChange, value}) => {
  if (!languages.length) return null;
  
  return (<div>
    <LangContext.Consumer>{lng => <h4>{translate(lng, 'switch.lang')}</h4>}</LangContext.Consumer>
    {
      languages.map(lang => (<div key={lang}>
        <label>
          { lang }<br />
          <input type="radio" name="lang" value={lang} checked={lang === value} onChange={onChange.bind(null, lang)} />
        </label>
      </div>))
    }
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