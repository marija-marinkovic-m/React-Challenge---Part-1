import React from 'react';

const LangContext = React.createContext('en');

var _dictionary;

export function registerLang (props) {
  if (!props || typeof props !== 'object') return;
  _dictionary = Object.keys(props)
    .reduce((acc, n) => {
      acc[n] = typeof props[n] !== 'object' ? {} : props[n];
      return acc;
    }, {});
}

export function translate(lang = 'en', param = '', values = []) {
  let result = (_dictionary && _dictionary[lang] && _dictionary[lang][param]) || param;
  if (values && values.length) {
    for (let i=0; i<values.length; i++) {
      result = result.replace(`{${i}}`, values[i]);
    }
  }
  return result;
}

export default LangContext;