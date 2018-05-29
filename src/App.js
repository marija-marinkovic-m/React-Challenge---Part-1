import React, { Component } from 'react';
import Timer from './Countdown';
import LanguageSwitcher from './LanguageSwitcher';
import LangContext, { registerLang } from './util/i18n';
import DateTimePicker from 'react-datetime-picker';

import { translations as availableLanguages } from './util/i18n/config';

registerLang(availableLanguages);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      datetime: new Date('September 22 2018 12:30')
    }
  }

  switchLang = (lang) => this.setState({ lang })

  handleDateTimeChange = (datetime) => this.setState({ datetime })

  render() {
    const { lang, datetime } = this.state;
    return (
      <LangContext.Provider value={lang}>

        <Timer dateReference={datetime} />

        <LanguageSwitcher
          languages={Object.keys(availableLanguages)}
          value={lang}
          onChange={this.switchLang} />

        <DateTimePicker
          value={datetime}
          onChange={this.handleDateTimeChange} />

      </LangContext.Provider>
    );
  }
}

export default App;
